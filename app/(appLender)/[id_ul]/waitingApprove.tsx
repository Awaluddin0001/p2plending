import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";

export default function WaitingApprove() {
  const router = useRouter();

  const routerLogin = () => {
    router.push(`/(loginLender)`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Selamat anda telah terdaftar</Text>
      <Text style={styles.normalText}>
        data dan dokumen anda dalam tahap verifikasi
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
