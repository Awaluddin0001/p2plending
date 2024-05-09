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

import MyButton from "@/components/util/myButton";
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";

type inputType = {
  nativeEvent: { text: string };
};

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

  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  const passVisibleHandler = () => {
    setIsVisible((is) => !is);
  };
  const getUsername = ({ nativeEvent: { text } }: inputType) => {
    setUsername(text);
  };
  const getPassword = ({ nativeEvent: { text } }: inputType) => {
    setPassword(text);
  };

  const routeHandler = async () => {
    const body = {
      username,
      password,
    };

    await fetchDataApi1(
      "post",
      `${process.env.EXPO_PUBLIC_BASE_URL}`,
      `${process.env.EXPO_PUBLIC_SERVICE_B1}`,
      "/login",
      body
    );
    // await AsyncStorage.setItem("token")
    // const data = await getJwt("lender");
    // if (data) {
    //   router.replace(
    //     `${process.env.EXPO_PUBLIC_ROUTE_LENDER_DASH}/${data.id_ul}/home`
    //   );
    // }
  };

  useEffect(() => {
    // const store = async () => {
    //   await SecureStore.setItemAsync("email", responseApi1.tokenData.email);
    //   await SecureStore.setItemAsync("token", responseApi1.token);
    //   await SecureStore.setItemAsync(
    //     "business",
    //     responseApi1.tokenData.business
    //   );
    //   await SecureStore.setItemAsync("id_ub", responseApi1.tokenData.id_ub);
    //   await SecureStore.setItemAsync("name", responseApi1.tokenData.name);
    //   await SecureStore.setItemAsync("phone", responseApi1.tokenData.phone);
    //   await SecureStore.setItemAsync("gender", responseApi1.tokenData.gender);
    //   await SecureStore.setItemAsync("foto", responseApi1.tokenData.foto);
    // };
    if (responseApi1) {
      if (responseApi1.token) {
        // store();
        router.replace(
          `/(appLender)/${responseApi1.tokenData.id_lb}/waitingApprove`
        );
      }
    }
  }, [responseApi1, router]);

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
              onChange={getUsername}
            />
            <View style={styles.wrapperPass}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#666"
                style={styles.inputPass}
                secureTextEntry={isVisible}
                onChange={getPassword}
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
            onPress={routeHandler}
          />
          <View style={styles.wrapperRegister}>
            <Text style={styles.textRegis}>Belum Punya Akun?</Text>
            <Link
              href={{ pathname: "/(registerLender)/termCondLender" }}
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
