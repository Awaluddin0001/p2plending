import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { color } from "@/constants/Colors";

export default function Bayar() {
  const router = useRouter();
  const [name, setName] = useState("" as string | null);
  const [foto, setFoto] = useState("" as string | null);
  const [gender, setGender] = useState("" as string | null);
  const [business, setBusiness] = useState("" as string | null);
  const [noVa, setnoVa] = useState("712471924710");
  const [isAtm, setIsAtm] = useState(false);
  const [isMbanking, setIsmbanking] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const takeUsetData = async () => {
    const userName: string | null = await AsyncStorage.getItem("userName");
    const userFoto: string | null = await AsyncStorage.getItem("userFoto");
    const userGender: string | null = await AsyncStorage.getItem("userGender");
    const userBusiness: string | null =
      await AsyncStorage.getItem("userBusiness");
    setName(userName);
    setFoto(userFoto);
    setGender(userGender);
    setBusiness(userBusiness);
  };

  const copyToclip = async () => {
    await Clipboard.setStringAsync(noVa);
    await Clipboard.getStringAsync();
  };

  const expandAtm = () => {
    setIsAtm((b) => !b);
  };

  const expandMbanking = () => {
    setIsmbanking((b) => !b);
  };

  useEffect(() => {
    takeUsetData();
  }, []);

  return (
    <View style={styles.wraperSendOtp}>
      <View style={styles.headDashboard}>
        <View style={styles.userInfoDashboard}>
          {foto !== "empty" ? (
            <Image
              source={{
                uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/${foto}`,
              }}
              style={styles.fotoDashboard}
            />
          ) : gender === "pria" ? (
            <Image
              source={{
                uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/pria.png`,
              }}
              style={styles.fotoDashboard}
            />
          ) : gender === "perempuan" ? (
            <Image
              source={{
                uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/perempuan.png`,
              }}
              style={styles.fotoDashboard}
            />
          ) : (
            <ActivityIndicator size="large" color={color.primary} />
          )}
          <View>
            <Text style={styles.nameDashboard}>{name}</Text>
            <Text style={styles.usahaDashboard}>{business}</Text>
          </View>
        </View>
        <FontAwesome name="bell" size={24} color="white" />
      </View>
      <View style={styles.cardBoard}>
        <View>
          <Text style={styles.textRegular}>Jumlah yang dibayar</Text>
          <Text style={styles.textBold}>Rp. 1.000.000</Text>
        </View>
        <View>
          <Text style={styles.textRegular}>Jatuh Tempo</Text>
          <Text style={styles.textBold}>15 - 12 - 2023</Text>
        </View>
      </View>
      <View style={styles.cardBoard}>
        <View style={styles.bniCardPay}>
          <Image source={require("@/assets/images/bni_paylogo.png")} />
          <View>
            <Text style={styles.bnitextRegular}>Nomor Virtual Account</Text>
            <Text style={styles.bnitextBold}>712471924710</Text>
          </View>
        </View>
        <Pressable onPress={copyToclip}>
          <FontAwesome5 name="copy" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView style={styles.scrollPay}>
        <Text style={styles.boldBayar}>Instruksi Pembayaran</Text>
        <Pressable onPress={expandAtm}>
          <Text style={styles.headlineBayar}>1. Lewat ATM</Text>
        </Pressable>
        {isAtm && (
          <View style={{ flexDirection: "column", gap: 5, marginTop: 10 }}>
            <View style={styles.textInstruction}>
              <Text>1. Masukkan kartu </Text>
              <Text style={styles.boldBayar}>ATM </Text>
              <Text>dan</Text>
              <Text style={styles.boldBayar}> Masukkan PIN</Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>2. Pilih Menu </Text>
              <Text style={styles.boldBayar}>Lainnya</Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>3. Pilih Menu </Text>
              <Text style={styles.boldBayar}>Transfer </Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>4. Pilih Menu </Text>
              <Text style={styles.boldBayar}>Virtual Account Billing </Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>5. Masukkan </Text>
              <Text style={styles.boldBayar}>Nomor Virtual Account </Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>6. Ikuti instruksi untuk menyelesaikan transaksi </Text>
            </View>
          </View>
        )}
        <Pressable onPress={expandMbanking}>
          <Text style={styles.headlineBayar}>2. Lewat Mobile Banking</Text>
        </Pressable>
        {isMbanking && (
          <View style={{ flexDirection: "column", gap: 5, marginTop: 10 }}>
            <View style={styles.textInstruction}>
              <Text>1. Login ke akun </Text>
              <Text style={styles.boldBayar}>BNI Mobile </Text>
              <Text>Anda</Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>2. Pilih Menu </Text>
              <Text style={styles.boldBayar}>Transfer </Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>3. Pilih Menu </Text>
              <Text style={styles.boldBayar}>Virtual Account Billing </Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>4. Masukkan </Text>
              <Text style={styles.boldBayar}>Nomor Virtual Account </Text>
            </View>
            <View style={styles.textInstruction}>
              <Text>5. Ikuti instruksi untuk menyelesaikan transaksi </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSendOtp: {
    flex: 1,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  headDashboard: {
    backgroundColor: color.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 40,
  },
  userInfoDashboard: {
    flex: 1,
    gap: 10,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  fotoDashboard: {
    borderRadius: 999,
    width: 60,
    height: 60,
  },
  nameDashboard: {
    fontFamily: "InterMedium",
    fontSize: 16,
    color: "#fff",
  },
  usahaDashboard: {
    fontFamily: "InterLight",
    color: "#fff",
    marginTop: 5,
  },
  cardBoard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    flexDirection: "row",
    gap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
    height: "10%",
  },
  textBold: {
    fontFamily: "InterMedium",
    fontSize: 18,
  },
  textRegular: {
    fontFamily: "InterRegular",
    fontSize: 12,
  },
  bniCardPay: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bnitextBold: {
    fontFamily: "InterSemiBold",
    fontSize: 16,
  },
  bnitextRegular: {
    fontFamily: "InterRegular",
    fontSize: 10,
  },
  scrollPay: {
    backgroundColor: "#fff",
    height: "50%",
    width: "90%",
    borderTopLeftRadius: 10,
    borderTopStartRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    flexDirection: "column",
    gap: 20,
    padding: 20,
    marginTop: 10,
  },
  headlineBayar: {
    color: color.primary,
    fontFamily: "InterMedium",
    fontSize: 18,
    borderBottomColor: color.primary,
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    paddingVertical: 10,
  },
  boldBayar: {
    fontFamily: "InterSemiBold",
  },
  textInstruction: {
    flexDirection: "row",
  },
});
