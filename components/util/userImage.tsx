import { Image, StyleSheet, ActivityIndicator } from "react-native";

import { color } from "@/constants/Colors";
export default function UserImage({
  foto,
  gender,
}: {
  foto: string;
  gender: string;
}) {
  return foto ? (
    <Image
      //   source={{
      //     uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/${foto}`,
      //   }}
      style={styles.fotoDashboard}
    />
  ) : gender === "pria" ? (
    <Image
      //   source={{
      //     uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/pria.png`,
      //   }}
      style={styles.fotoDashboard}
    />
  ) : gender === "perempuan" ? (
    <Image
      //   source={{
      //     uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/perempuan.png`,
      //   }}
      style={styles.fotoDashboard}
    />
  ) : (
    <ActivityIndicator size="large" color={color.primary} />
  );
}

const styles = StyleSheet.create({
  fotoDashboard: {
    borderRadius: 999,
    width: 60,
    height: 60,
  },
});
