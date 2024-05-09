import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";

export default function RegistrasiCompleteLender() {
  const router = useRouter();

  const routerLogin = () => {
    router.push(`/(loginLender)`);
  };

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/checklist.png")} />
      <Text style={styles.headerText}>Selamat anda telah terdaftar</Text>
      <Text style={styles.normalText}>
        Data anda telah kami terima, untuk pengajuan pinjaman pertama siapkan
        ktp untuk verifikasi pengajuan, sekarang anda dapat login sebagai
        penerima dana
      </Text>
      <MyButton
        btnText="Login"
        btnType="primary"
        btnWidth="40%"
        onPress={routerLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    width: "100%",
  },
  headerText: {
    fontFamily: "InterSemiBold",
    color: `${color.primary}`,
    marginVertical: 10,
    textAlign: "center",
    fontSize: 14,
  },
  normalText: {
    textAlign: "center",
    width: "70%",
    marginBottom: 20,
  },
});
