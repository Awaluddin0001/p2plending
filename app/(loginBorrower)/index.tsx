import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Image,
  ActivityIndicator,
} from "react-native";

import { color } from "@/constants/Colors";
import MyButton from "@/components/util/myButton";

export default function Index() {
  const [isVisible, setIsVisible] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //   const contextData = useMyContext();
  //   useEffect(() => {
  //     async function redirect() {
  //       const jwt = SecureStore.getItemAsync("jwt");
  //       if (!jwt) {
  //         router.push(
  //           `${process.env.EXPO_PUBLIC_ROUTE_LENDER_DASH}/${contextData.id_ul}/home`
  //         );
  //       }
  //     }
  //     redirect();
  //   }, []);

  const passVisibleHandler = () => {
    setIsVisible((is) => !is);
  };
  const getUsername = (text: any) => {
    setUsername(text);
  };
  const getPassword = (text: any) => {
    setPassword(text);
  };

  //   const routeHandler = async () => {
  //     const login = await loginState(username, password, setLoading, "lender");
  //     setStorageItemAsync("jwt", login.token);
  //     const data = await getJwt("lender");
  //     if (data) {
  //       router.replace(
  //         `${process.env.EXPO_PUBLIC_ROUTE_LENDER_DASH}/${data.id_ul}/home`
  //       );
  //     }
  //   };

  return (
    <View style={styles.wrapperLogin}>
      {loading ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Image
            source={require(`@/assets/images/doeku_normal.png`)}
            style={styles.loginLogo}
          />
          <View style={styles.formInputs}>
            <TextInput
              placeholder="Email atau Nomor Handphone"
              placeholderTextColor="#666"
              style={styles.inputText}
              onChangeText={getUsername}
            />
            <View style={styles.wrapperPass}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#666"
                style={styles.inputPass}
                secureTextEntry={isVisible}
                onChangeText={getPassword}
              />
              {isVisible ? (
                <Ionicons
                  name="eye"
                  size={24}
                  color="#555"
                  onPress={passVisibleHandler}
                />
              ) : (
                <Ionicons
                  name="eye-off"
                  size={24}
                  color="#555"
                  onPress={passVisibleHandler}
                />
              )}
            </View>
            {/* <Link href="/login/forgetPassword" style={styles.forgetPass}>
              Lupa kata sandi?
            </Link> */}
          </View>
          <MyButton
            btnType="primary"
            btnWidth="60%"
            btnText="Login"
            btnFont="InterMedium"
            // onPress={routeHandler}
          />
          <View style={styles.wrapperRegister}>
            <Text style={styles.textRegis}>Belum Punya Akun?</Text>
            <Link
              href={{ pathname: "/(registerBorrower)/termCond" }}
              style={{ ...styles.textRegis, color: color.primary }}
            >
              Register
            </Link>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loginLogo: {
    marginBottom: 22,
  },
  formInputs: {
    width: "60%",
    flexDirection: "column",
    marginBottom: 22,
  },
  inputText: {
    color: "#222",
    borderBottomColor: "#bbb",
    borderBottomWidth: 1.5,
    paddingHorizontal: 6,
    paddingVertical: 8,
    width: "100%",
    fontSize: 14,
    marginVertical: 11,
    fontFamily: "InterRegular",
  },
  wrapperPass: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1.5,
    width: "100%",
    marginVertical: 11,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputPass: {
    color: "#222",
    paddingHorizontal: 6,
    paddingVertical: 8,
    fontSize: 14,
    width: "90%",
    fontFamily: "InterRegular",
  },
  forgetPass: {
    width: "100%",
    textAlign: "right",
    color: "#555",
    fontFamily: "InterRegular",
  },
  wrapperRegister: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    gap: 10,
    width: "60%",
  },
  textRegis: {
    color: "#555",
    fontFamily: "InterRegular",
  },
});
