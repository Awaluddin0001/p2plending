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

// component and template
import MyButton from "@/components/util/myButton";
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";

type inputType = {
  nativeEvent: { text: string };
};

export default function EmailOtp() {
  const [valueOTP, setValueOTP] = useState(" ");
  const [code, setCode] = useState("");
  const [isDone, setIsdone] = useState(false);
  const otpRef = useRef<TextInput>(null);
  const { id_ub } = useLocalSearchParams();
  const [isResend, setIsresend] = useState(true);

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

  const router = useRouter();

  const inputOTP = (e: string) => {
    setValueOTP(e);
  };

  const getCode = ({ nativeEvent: { text } }: inputType) => {
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

  const resendEmail = async () => {
    await fetchDataApi2(
      "get",
      `${process.env.EXPO_PUBLIC_BASE_URL}`,
      `${process.env.EXPO_PUBLIC_SERVICE_A1}`,
      "/resendOtpemail",
      undefined,
      { id_ub }
    );
  };

  const routeHandler = async () => {
    if (code) {
      const body = {
        id_ub,
        otp: code,
      };

      await fetchDataApi1(
        "get",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_A1}`,
        "/otpEmail",
        undefined,
        body
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
          router.push(`/${id_ub}/pinRegistration`);
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
        if (responseApi2.message === "send") {
          setIsresend(false);
          Alert.alert("Resend OTP", "Kode OTP telah dikirim ulang");
        } else {
          Alert.alert("Resend OTP", "Kode OTP gagal dikirim ulang");
        }
      }
    }
  }, [responseApi1, responseApi2, router, id_ub]);

  return (
    <View style={styles.wraperSendOtp}>
      {loadingApi1 || loadingApi2 ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Image source={require("@/assets/images/verifikasiEmail.png")} />
          <Text style={styles.headertext}>Verifikasi Email</Text>
          <Text style={styles.normalText}>
            Kode verifikasi telah terkirim ke email
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Text style={styles.normalText}>
              Tidak Menerima Kode verifikasi?
            </Text>
            {isResend && (
              <Pressable onPress={() => resendEmail()}>
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
