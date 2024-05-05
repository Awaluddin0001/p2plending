import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";

export default function PhoneNumber() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [latitude, setLatitude] = useState("" as string | number);
  const [longitude, setLongitude] = useState("" as string | number);
  const [phone, setPhone] = useState("");
  const [isDone, setIsdone] = useState(false);
  const [idub, setIdub] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const timestamp = Date.now();
  const date = new Date(timestamp);
  date.setMinutes(date.getMinutes() + 480);
  const formattedDate = date.toISOString().replace("T", " ").slice(0, 19);

  const body = {
    phone: phone,
    status: "0",
    latitude: latitude,
    longitude: longitude,
    daterequest: formattedDate,
    request: 1,
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Need Permission",
        "Permission to access location was denied"
      );
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  };

  const routeHandler = () => {
    console.log("yes");
    getLocation();
    router.push("/PAB10001/phoneOtp");
  };

  const getPhone = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setPhone(text);
  };

  //   useEffect(() => {
  //     const dataLength = Object.keys(data).length;
  //     if (phone) {
  //       setIsdone(true);
  //     } else {
  //       setIsdone(false);
  //     }
  //     if (dataLength > 0 && !idub) {
  //       setIdub(data.id_ub);
  //       setMessage(data.message);
  //       return;
  //     }
  //     if (idub && message) {
  //       message == "success" &&
  //         router.push(
  //           `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${idub}/receiveOtp`
  //         );
  //       return;
  //     }
  //     if (phone && latitude && longitude && isDone && !idub) {
  //       postApiBs(body, "/api/borrower/registerPhone", setData, setLoading);
  //     }
  //   }, [phone, latitude, longitude, isDone, idub, message, data]);

  return (
    <View style={styles.wraperSendOtp}>
      {loading ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Image source={require("@/assets/images/kirimOtp.png")} />
          <Text style={styles.headertext}>Masukkan Nomor Handphone Anda</Text>
          <Text style={{ fontFamily: "InterRegular" }}>
            Kami akan mengirimkan{" "}
            <Text style={styles.boldText}>6 digit OTP</Text> verifikasi
          </Text>
          <View style={styles.wrappernumberInput}>
            <Text style={styles.countryNumber}>+62</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.phoneInput}
              placeholder="8xxxxxxxxxx"
              placeholderTextColor="#bbb"
              inputMode="numeric"
              onEndEditing={getPhone}
            />
          </View>
          <MyButton
            btnType={isDone && "primary"}
            btnWidth="60%"
            btnText="Kirim"
            btnFont="InterMedium"
            onPress={routeHandler}
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
  wrappernumberInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#bbb",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 22,
    marginBottom: 10,
    backgroundColor: "#ddd",
    width: "65%",
  },
  countryNumber: {
    padding: 12,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    color: "#333",
    fontFamily: "InterMedium",
    margin: 0,
  },
  phoneInput: {
    padding: 12,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    fontFamily: "InterRegular",
    width: "80%",
    backgroundColor: "#fff",
  },
});
