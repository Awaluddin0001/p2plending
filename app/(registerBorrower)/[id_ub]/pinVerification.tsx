import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";
// import { getApiBs } from "../../../../src/components/util/BorrowerService";

export default function PinVerification() {
  const [valueOTP, setValueOTP] = useState(" ");
  const [pin, setPin] = useState("");
  const [isDone, setIsdone] = useState(false);
  const otpRef = useRef<TextInput>(null);
  const { id_ub } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  function convertToFixedLengthArray(str: string) {
    const fixedLength = 6;
    const paddedString = str.padEnd(fixedLength, " "); // Pad the string with '-' characters if it's shorter than 6 characters
    const arrayFromString = paddedString.split("").slice(0, fixedLength);
    return arrayFromString;
  }

  let otpLength = convertToFixedLengthArray(valueOTP);

  const router = useRouter();
  const routeHandler = () => {
    if (pin) {
      const body = {
        id_ub: id_ub,
        pin: pin,
      };

      //   getApiBs(body, "/api/borrower/authPin", setData, setLoading);
    }
    // router.push(
    //   `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/lengkapiDataPribadi`
    // );
  };

  const inputOTP = (e: string) => {
    setValueOTP(e);
  };

  const getPin = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setPin(text);
  };

  const userPressOTP = () => {
    if (otpRef.current) {
      otpRef.current.focus();
    }
  };

  useEffect(() => {
    if (valueOTP) {
      otpLength = convertToFixedLengthArray(valueOTP);
    }
    if (pin.length == 6) {
      setIsdone(true);
    } else {
      setIsdone(false);
    }
    // if (data.message == "auth") {
    //   router.push(
    //     `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/lengkapiDataPribadi`
    //   );
    // }
  }, [valueOTP, pin, data]);

  return (
    <View style={styles.wraperSendOtp}>
      {loading ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Image source={require("@/assets/images/terimaOtp.png")} />
          <Text style={styles.headertext}>Input Ulang Pin Anda</Text>
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
              onEndEditing={getPin}
              ref={otpRef}
            />
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
