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
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";

export default function EmailRegistrationLender() {
  const router = useRouter();
  const [isDone, setIsdone] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { id_ul } = useLocalSearchParams();
  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  const getEmail = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setEmail(text);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (isValid) {
      return true;
    } else {
      Alert.alert("Format Email Salah", "Masukkan Format email yang benar");
      return false;
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
  };

  const validatePass = () => {
    if (password && rePassword) {
      if (password === rePassword) {
        return true;
      } else {
        Alert.alert("Password tidak sesuai", "Sesuaikan kembali password anda");
        return false;
      }
    }
  };

  const validForm = () => {
    if (email && password && rePassword) {
      setIsdone(true);
    } else {
      setIsdone(false);
    }
  };

  const routeHandler = async () => {
    const body = {
      id_ul,
      email,
      password,
    };

    const validEmail = validateEmail();
    const validPass = validatePass();

    if (validEmail && validPass) {
      await fetchDataApi1(
        "post",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_B1}`,
        "/registerEmail",
        body
      );
    }
  };

  useEffect(() => {
    validForm();

    if (responseApi1) {
      if (responseApi1.message) {
        if (responseApi1.message === "success") {
          router.push(`/${id_ul}/emailOtpLender`);
        } else if (responseApi1.message === "doeku") {
          router.push(`/${id_ul}/emailOtpLender`);
        } else {
          responseApi1.message = "";
          Alert.alert("gagal", "email anda telah terdaftar");
        }
      }
    }
  }, [responseApi1, router, id_ul, email, password, rePassword]);

  return (
    <View style={styles.wraperSection}>
      {loadingApi1 ? (
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
              onChange={getEmail}
            />
            <Text style={styles.labelText}>Password*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              secureTextEntry
              onChange={getPassword}
            />
            <Text style={styles.labelText}>Re-type Password*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              secureTextEntry
              onChange={getrepassword}
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
