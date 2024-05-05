import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";
// import { postApiBs } from "@/components/util/BorrowerService";
// import { postEB } from "@/components/util/EventBus";

export default function EmailRegistration() {
  const router = useRouter();
  const [isDone, setIsdone] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isPass, setIspass] = useState(true);
  const { id_ub } = useLocalSearchParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const routeHandler = async () => {
    const body = {
      id_ub: id_ub,
      email: email,
      password: password,
    };

    const davs = {
      id_ub: id_ub,
      email: email,
      pas: password,
    };
    // await postEB(davs, "/api/eventbus/storedavest", setLoading);
    // postApiBs(body, "/api/borrower/registerEmail", setData, setLoading);
    // // router.push(
    //   `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/activateEmail`
    // );
  };

  const getEmail = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setEmail(text);
    if (!email) {
      setIsEmail(false);
    }
    validateEmail(text);
  };

  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(val);
    if (isValid) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
      Alert.alert("Format Email Salah", "Masukkan Format email yang benar");
    }
  };

  const getPassword = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setPassword(text);
  };
  const getrepassword = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setRePassword(text);
    setIspass(false);
  };

  const validatePass = () => {
    if (password && rePassword) {
      if (password == rePassword) {
        setIspass(true);
      } else {
        setIspass(false);
        Alert.alert("Password tidak sesuai", "Sesuaikan kembali password anda");
      }
    }
  };

  const validForm = () => {
    if (email && isEmail && password && rePassword && isPass) {
      setIsdone(true);
    } else {
      setIsdone(false);
    }
  };

  // useEffect(() => {
  //   const dataLength = Object.keys(data).length;
  //   validForm();
  //   validatePass();
  //   if (dataLength > 0) {
  //     data.message == "success" &&
  //       router.push(
  //         `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/activateEmail`
  //       );

  //     data.message != "success" &&
  //       Alert.alert("Failed Resgister", "Some error happend");
  //   }
  // }, [isEmail, email, password, rePassword, isPass, isEmail, data, isDone]);

  return (
    <View style={styles.wraperSection}>
      {loading ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", paddingTop: 15 }}
          >
            <Text style={styles.normalText}>
              Pastikan semua data di isi dengan benar :
            </Text>
            <Text style={styles.headerText}>Data Akun :</Text>
            <Text style={styles.labelText}>E-mail*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              onEndEditing={getEmail}
            />
            <Text style={styles.labelText}>Password*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              secureTextEntry={true}
              onEndEditing={getPassword}
            />
            <Text style={styles.labelText}>Re-type Password*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              secureTextEntry={true}
              onEndEditing={getrepassword}
            />
          </ScrollView>
          <MyButton
            btnText="selanjutnya"
            btnType={isDone && "primary"}
            btnWidth="100%"
            onPress={routeHandler}
            btnDisable={!isDone}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSection: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  normalText: {
    fontFamily: "InterRegular",
    textAlign: "left",
    width: "100%",
  },
  headerText: {
    fontFamily: "InterSemiBold",
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    marginVertical: 15,
  },
  labelText: {
    fontFamily: "InterMedium",
    fontSize: 14,
    textAlign: "left",
    width: "100%",
  },
  labelTextInfo: {
    fontFamily: "InterMedium",
    fontSize: 12,
    textAlign: "left",
    width: "100%",
    color: "#333",
    marginBottom: 10,
  },
  inputStyle: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: "#bbb",
    borderWidth: 2,
  },
  inputStyleNoMargin: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    borderColor: "#bbb",
    borderWidth: 2,
    marginBottom: 15,
  },
});
