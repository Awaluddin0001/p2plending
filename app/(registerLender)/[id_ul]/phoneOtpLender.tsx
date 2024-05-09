import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";

import Countdown from "@/components/util/countDownFive";
import MyButton from "@/components/util/myButton";
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";

export default function PhoneOtpLender() {
  const router = useRouter();
  const [valueOTP, setValueOTP] = useState("");
  const [code, setCode] = useState("");
  const otpRef = useRef<TextInput>(null);
  const { id_ul } = useLocalSearchParams();

  const [isDone, setIsdone] = useState(false);
  const [isResend, setIsresend] = useState(true);
  const initialTime = 5 * 60; // 5 minutes in seconds
  const [time, setTime] = useState(initialTime);

  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  const {
    loading: loadingApi2,
    resp: responseApi2,
    fetchData: fetchDataApi2,
  } = useApi<any>();

  function convertToFixedLengthArray(str: string) {
    const fixedLength = 6;
    const paddedString = str.padEnd(fixedLength, " "); // Pad the string with '-' characters if it's shorter than 6 characters
    const arrayFromString = paddedString.split("").slice(0, fixedLength);
    return arrayFromString;
  }

  const otpLength = convertToFixedLengthArray(valueOTP);

  const inputOTP = (e: string) => {
    setValueOTP(e);
  };

  const getCode = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setCode(text);
    if (text.length === 6) {
      setIsdone(true);
    } else {
      setIsdone(false);
    }
  };

  const userPressOTP = () => {
    if (otpRef.current) {
      otpRef.current.focus();
    }
  };

  const resendotp = async () => {
    if (time === 0) {
      await fetchDataApi2(
        "get",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_B1}`,
        "/resendOtpphone",
        undefined,
        { id_ul }
      );
    }
  };

  const routeHandler = async () => {
    if (code) {
      const param = {
        id_ul,
        otp: code,
      };

      await fetchDataApi1(
        "get",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_B1}`,
        "/otpPhone",
        undefined,
        param
      );
    }
  };

  useEffect(() => {
    if (responseApi1) {
      if (responseApi1.message) {
        if (responseApi1.message === "wrong") {
          responseApi1.message = "";
          Alert.alert("Salah", "Kode yang anda masukkan tidak sesuai");
        } else if (responseApi1.message === "auth") {
          router.push(`/${id_ul}/emailRegistrationLender`);
        } else {
          responseApi1.message = "";
          Alert.alert(
            "error",
            "Server dalam keadaan Maintenance, balik lagi nanti"
          );
        }
      }
    }
    if (responseApi2) {
      if (responseApi2.message) {
        if (responseApi2.message === "update") {
          setTime(initialTime);
          setIsresend(false);
          responseApi2.message = "";
          Alert.alert("Terkirim", "kode yang baru telah terkirim");
        } else if (responseApi2.message === "failed") {
          Alert.alert("Gagal Terkirim", "kode yang baru gagal terkirim");
        }
      }
    }
  }, [responseApi1, responseApi2, router, initialTime, id_ul]);

  return (
    <View style={styles.wraperSendOtp}>
      {loadingApi1 || loadingApi2 ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Image source={require("@/assets/images/terimaOtp.png")} />
          <Text style={styles.headertext}>Verifikasi OTP</Text>
          <Text style={styles.normalText}>
            Masukkan Kode OTP yang anda terima melalui sms
          </Text>
          <Pressable
            onPress={userPressOTP}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View style={styles.sixOtp}>
              {otpLength.map((i, ind) => (
                <Text key={ind + 1} style={styles.otpText}>
                  {i}
                </Text>
              ))}
            </View>
          </Pressable>
          <View style={styles.wrapperOtp}>
            <TextInput
              maxLength={6}
              keyboardType="numeric"
              inputMode="numeric"
              onChangeText={inputOTP}
              onChange={getCode}
              ref={otpRef}
            />
          </View>
          <Countdown time={time} setTime={setTime} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Text style={styles.normalText}>Tidak Menerima OTP?</Text>
            {isResend && (
              <Pressable onPress={() => resendotp()}>
                <Text style={{ color: color.primary }}>RESEND</Text>
              </Pressable>
            )}
          </View>

          <MyButton
            btnType={isDone && "primary"}
            btnWidth="60%"
            onPress={routeHandler}
            btnText="Verifikasi"
            btnDisable={!isDone}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSendOtp: {
    flex: 1,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "InterMedium",
    textAlign: "center",
  },
  headertext: {
    color: `${color.primary}`,
    fontFamily: "InterMedium",
    marginVertical: 11,
  },
  boldText: {
    fontFamily: "InterMedium",
  },
  normalText: {
    fontFamily: "InterRegular",
    marginVertical: 11,
    color: "#888",
  },
  wrapperOtp: {
    opacity: 0,
    position: "absolute",
  },
  otpInput: {
    padding: 10,
    borderRadius: 5,
    borderColor: "#bbb",
    borderWidth: 1,
    fontSize: 16,
    width: 30,
  },
  sixOtp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  otpText: {
    borderRadius: 5,
    borderColor: color.primary,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: color.secondary,
    fontFamily: "InterSemiBold",
    width: 30,
  },
});
