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
import { color } from "@/constants/Colors";
// import {
//   getApiBs,
//   getReApiBs,
// } from "../../../../src/components/util/BorrowerService";

type inputType = {
  nativeEvent: { text: string };
};

export default function EmailOtp() {
  const [valueOTP, setValueOTP] = useState(" ");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isDone, setIsdone] = useState(false);
  const otpRef = useRef<TextInput>(null);
  const { id_ub } = useLocalSearchParams();
  const [data, setData] = useState<{
    data: {
      email?: string | undefined;
    };
    message?: string | undefined;
  }>({ data: { email: "" } });
  const [loading, setLoading] = useState(false);
  const [isResend, setIsresend] = useState(true);

  function convertToFixedLengthArray(str: string) {
    const fixedLength = 6;
    const paddedString = str.padEnd(fixedLength, " "); // Pad the string with '-' characters if it's shorter than 6 characters
    const arrayFromString = paddedString.split("").slice(0, fixedLength);
    return arrayFromString;
  }

  let otpLength = convertToFixedLengthArray(valueOTP);

  const router = useRouter();

  const routeHandler = () => {
    if (code) {
      const body = {
        id_ub: id_ub,
        otp: code,
      };

      //   getApiBs(body, "/api/borrower/otpEmail", setData, setLoading);
    }
    // router.push(
    //   `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/inputPin`
    // );
  };
  useEffect(() => {
    // getApiBs({ id_ub: id_ub }, "/api/borrower/email", setData, setLoading);
  }, []);

  const inputOTP = (e: string) => {
    setValueOTP(e);
  };

  const getCode = ({ nativeEvent: { text } }: inputType) => {
    setCode(text);
  };

  const userPressOTP = () => {
    if (otpRef.current) {
      otpRef.current.focus();
    }
  };

  useEffect(() => {
    const dataLength = Object.keys(data).length;
    if (dataLength > 0 && !email) {
      if (data.data.email) {
        setEmail(data.data.email);
      }
    }
    if (valueOTP) {
      otpLength = convertToFixedLengthArray(valueOTP);
    }
    if (code.length === 6) {
      setIsdone(true);
    } else {
      setIsdone(false);
    }
    if (data.message) {
      if (data.message === "auth") {
        //   router.push(
        //     `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/inputPin`
        //   );
      }
      if (data.message === "wait") {
        Alert.alert(
          "Limit Input",
          "Anda telah melewat batas percobaan, tunggu dalam 1x24 jam",
          [
            {
              onPress: () =>
                setData((fd) => {
                  return { ...fd, message: "" };
                }),
            },
          ]
        );
      }
      if (data.message === "wrong") {
        Alert.alert("Wrong OTP", "Angka yang anda masukkan tidak sesuai", [
          {
            onPress: () =>
              setData((fd) => {
                return { ...fd, message: "" };
              }),
          },
        ]);
      }
    }
  }, [valueOTP, code, data]);

  const resendEmail = async () => {
    // const res = await getReApiBs(
    //   { id_ub: id_ub },
    //   "/api/borrower/resendOtpemail",
    //   setLoading
    // );
    // if (res.message === "send") {
    //   Alert.alert("Resend OTP", "Kode OTP telah dikirim ulang");
    //   setIsresend(false);
    // }
  };

  return (
    <View style={styles.wraperSendOtp}>
      {loading ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Image source={require("@/assets/images/verifikasiEmail")} />
          <Text style={styles.headertext}>Verifikasi Email</Text>
          <Text style={styles.normalText}>
            Kode verifikasi telah terkirim ke {email}
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
              ref={otpRef}
              onEndEditing={getCode}
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
