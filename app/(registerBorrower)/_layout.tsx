import { Stack } from "expo-router";
import React from "react";

import { color } from "@/constants/Colors";

export default function RegisterLayout() {
  const hideStack = { headerShown: false };
  const tagRegis = "Registrasi | ";
  const stackScreen = (title: string | null) => {
    return {
      title: `${title}`,
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 18,
      },
      headerStyle: {
        backgroundColor: `${color.primary}`,
      },
      statusBarColor: `${color.primary}`,
    };
  };
  return (
    <Stack screenOptions={hideStack} initialRouteName="termCond">
      <Stack.Screen
        name="termCond"
        options={stackScreen("Syarat Dan Ketentuan")}
      />
      <Stack.Screen
        name="phoneNumber"
        options={stackScreen(`${tagRegis}Registration Phone`)}
      />
      <Stack.Screen
        name="[id_ub]/phoneOtp"
        options={stackScreen(`${tagRegis}Verifikasi Phone`)}
      />
      <Stack.Screen
        name="[id_ub]/emailRegistration"
        options={stackScreen(`${tagRegis}Lengkapi Data Akun`)}
      />
      <Stack.Screen
        name="[id_ub]/emailOtp"
        options={stackScreen(`${tagRegis}Verifikasi Email`)}
      />
      <Stack.Screen
        name="[id_ub]/dataPribadi"
        options={stackScreen(`${tagRegis}Lengkapi Data Pribadi`)}
      />
    </Stack>
  );
}
