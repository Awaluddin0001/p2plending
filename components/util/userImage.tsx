import { Image, StyleSheet, ActivityIndicator } from "react-native";

import { color } from "@/constants/Colors";
export default function UserImage({
  foto,
  gender,
}: {
  foto: string | null;
  gender: string | null;
}) {
  return foto ? (
    <Image
      source={{
        uri: `${process.env.EXPO_PUBLIC_BASE_URL}:50010/account/default/${foto}`,
      }}
      style={styles.fotoDashboard}
    />
  ) : gender === "pria" ? (
    <Image
      source={{
        uri: `${process.env.EXPO_PUBLIC_BASE_URL}:50010/account/default/pria.png`,
      }}
      style={styles.fotoDashboard}
    />
  ) : gender === "perempuan" ? (
    <Image
      source={{
        uri: `${process.env.EXPO_PUBLIC_BASE_URL}:50010/account/default/perempuan.png`,
      }}
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
