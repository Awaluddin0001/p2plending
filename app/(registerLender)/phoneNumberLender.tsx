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
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";

export default function PhoneNumberLender() {
  const router = useRouter();
  const [latitude, setLatitude] = useState(" " as string | number);
  const [longitude, setLongitude] = useState(" " as string | number);
  const [phone, setPhone] = useState(" ");
  const [isDone, setIsdone] = useState(false);
  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  const timestamp = Date.now();
  const date = new Date(timestamp);
  date.setMinutes(date.getMinutes() + 480);
  const formattedDate = date.toISOString().replace("T", " ").slice(0, 19);

  const data: {
    phone: string;
    status: string;
    latitude: string | number;
    longitude: string | number;
    daterequest: string;
    request: number;
  } = {
    phone,
    status: "0",
    latitude,
    longitude,
    daterequest: formattedDate,
    request: 1,
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Need Permission",
        "Permission to access location was denied"
      );
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setLatitude((l) => (l = location.coords.latitude));
    setLongitude((l) => (l = location.coords.longitude));
  };

  const getPhone = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setPhone(text);
    if (!data.latitude && !data.longitude) {
      getLocation();
    }
    if (text.length > 9) {
      setIsdone(true);
    } else {
      setIsdone(false);
    }
  };

  const routeHandler = async () => {
    try {
      if (phone) {
        await fetchDataApi1(
          "post",
          `${process.env.EXPO_PUBLIC_BASE_URL}`,
          `${process.env.EXPO_PUBLIC_SERVICE_B1}`,
          "/registerPhone",
          data
        );
      }
    } catch (err: any) {
      Alert.alert("failed", err);
    }
  };

  useEffect(() => {
    if (responseApi1) {
      if (responseApi1.message && responseApi1.id_ul) {
        if (responseApi1.message === "success") {
          router.push(`/${responseApi1.id_ul}/phoneOtpLender`);
        } else if (responseApi1.message === "verified") {
          router.push(`/${responseApi1.id_ul}/emailRegistrationLender`);
        } else if (responseApi1.message === "pin") {
          router.push(`/${responseApi1.id_ul}/pinRegistrationLender`);
        } else if (responseApi1.message === "detail") {
          router.push(`/${responseApi1.id_ul}/dataPribadiLender`);
        } else if (responseApi1.message === "business") {
          router.push(`/${responseApi1.id_ul}/dataUsahaLender`);
        } else if (responseApi1.message === "registere") {
          Alert.alert("Registered", "anda telah terdaftar", [
            {
              text: "Ok",
              onPress: () => router.push(`/(loginLender)`),
            },
          ]);
        }
      }
    }
  }, [responseApi1, router]);

  return (
    <View style={styles.wraperSendOtp}>
      {loadingApi1 ? (
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
              onChange={getPhone}
            />
          </View>
          <MyButton
            btnType={isDone && "primary"}
            btnWidth="60%"
            btnText="Kirim"
            btnFont="InterMedium"
            onPress={routeHandler}
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
