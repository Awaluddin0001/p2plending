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
import { color } from "@/constants/Colors";

export default function PhoneOtp() {
  const [valueOTP, setValueOTP] = useState(" ");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const otpRef = useRef<TextInput>(null);
  const { id_ub } = useLocalSearchParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [isDone, setIsdone] = useState(false);
  const [isResend, setIsresend] = useState(true);
  const initialTime = 5 * 60; // 5 minutes in seconds
  const [time, setTime] = useState(initialTime);

  function convertToFixedLengthArray(str: string) {
    const fixedLength = 6;
    const paddedString = str.padEnd(fixedLength, " "); // Pad the string with '-' characters if it's shorter than 6 characters
    const arrayFromString = paddedString.split("").slice(0, fixedLength);
    return arrayFromString;
  }

  let otpLength = convertToFixedLengthArray(valueOTP);

  const router = useRouter();

  const routeHandler = () => {
    // if (code) {
    //   const body = {
    //     id_ub: id_ub,
    //     otp: code,
    //   };

    //   getApiBs(body, "/api/borrower/otpPhone", setData, setLoading);
    // }
    router.push("/(registerBorrower)/PAB10001/emailRegistration");
  };

  //   useEffect(() => {
  //     getApiBs(
  //       { id_ub: id_ub },
  //       "/api/borrower/numberPhone",
  //       setData,
  //       setLoading
  //     );
  //   }, []);

  //   const resendotp = async () => {
  //     const res = await getReApiBs(
  //       { id_ub: id_ub },
  //       "/api/borrower/resendOtpphone",
  //       setLoading
  //     );

  //     if (res.message == "send") {
  //       Alert.alert("Resend OTP", "Kode OTP telah dikirim ulang");
  //       setIsresend(false);
  //       setTime(initialTime);
  //     }
  //   };

  const inputOTP = (e: string) => {
    setValueOTP(e);
  };

  const getCode = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setCode(text);
  };

  const userPressOTP = () => {
    if (otpRef.current) {
      otpRef.current.focus();
    }
  };

  //   useEffect(() => {
  //     const dataLength = Object.keys(data).length;
  //     if (dataLength > 0 && !phone) {
  //       setPhone(data.data.phone);
  //     }
  //     if (valueOTP) {
  //       otpLength = convertToFixedLengthArray(valueOTP);
  //     }
  //     if (code.length == 6) {
  //       setIsdone(true);
  //     } else {
  //       setIsdone(false);
  //     }
  //     if (data.message == "auth") {
  //       router.push(
  //         `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/lengkapiDataAkun`
  //       );
  //     }
  //     if (data.message == "wait") {
  //       Alert.alert(
  //         "Limit Input",
  //         "Anda telah melewat batas percobaan, tunggu dalam 1x24 jam",
  //         [
  //           {
  //             onPress: (onPress = () => {
  //               setData((data.message = ""));
  //             }),
  //           },
  //         ]
  //       );
  //     }
  //     if (data.message == "wrong") {
  //       Alert.alert("Wrong OTP", "Angka yang anda masukkan tidak sesuai", [
  //         {
  //           onPress: (onPress = () => {
  //             setData((data.message = ""));
  //           }),
  //         },
  //       ]);
  //     }
  //   }, [valueOTP, code, data]);

  return (
    <View style={styles.wraperSendOtp}>
      {loading ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Image source={require("@/assets/images/terimaOtp.png")} />
          <Text style={styles.headertext}>Verifikasi OTP</Text>
          <Text style={styles.normalText}>
            Code OTP telah terkirim ke +62{phone}
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
              onEndEditing={getCode}
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
              <Pressable
              // onPress={() => resendotp()}
              >
                <Text style={{ color: color.primary }}>RESEND</Text>
              </Pressable>
            )}
          </View>

          <MyButton
            btnType={isDone && "primary"}
            btnWidth="60%"
            onPress={routeHandler}
            btnText="Verifikasi"
            // btnDisable={!isDone}
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
