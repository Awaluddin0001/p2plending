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
    <Stack screenOptions={hideStack} initialRouteName="termCondLender">
      <Stack.Screen
        name="termCondLender"
        options={stackScreen("Syarat Dan Ketentuan")}
      />
      <Stack.Screen
        name="phoneNumberLender"
        options={stackScreen(`${tagRegis}Registration Phone`)}
      />
      <Stack.Screen
        name="[id_ul]/phoneOtpLender"
        options={stackScreen(`${tagRegis}Verifikasi Phone`)}
      />
      <Stack.Screen
        name="[id_ul]/emailRegistrationLender"
        options={stackScreen(`${tagRegis}Lengkapi Data Akun`)}
      />
      <Stack.Screen
        name="[id_ul]/emailOtpLender"
        options={stackScreen(`${tagRegis}Verifikasi Email`)}
      />
      <Stack.Screen
        name="[id_ul]/pinRegistrationLender"
        options={stackScreen(`${tagRegis}Buat Pin Baru`)}
      />
      <Stack.Screen
        name="[id_ul]/pinVerificationLender"
        options={stackScreen(`${tagRegis}Verifikasi Pin`)}
      />
      <Stack.Screen
        name="[id_ul]/dataPribadiLender"
        options={stackScreen(`${tagRegis}Lengkapi Data Pribadi`)}
      />
      <Stack.Screen
        name="[id_ul]/dataUsahaLender"
        options={stackScreen(`${tagRegis}Lengkapi Data Usaha`)}
      />
      <Stack.Screen
        name="[id_ul]/fotoDalamTokoLender"
        options={stackScreen(`${tagRegis}Foto Dalam Toko`)}
      />
      <Stack.Screen
        name="[id_ul]/fotoLuarTokoLender"
        options={stackScreen(`${tagRegis}Foto Luar Toko`)}
      />
      <Stack.Screen
        name="[id_ul]/regTtdLender"
        options={stackScreen(`${tagRegis}Tanda Tangan`)}
      />
      <Stack.Screen name="registrasiCompleteLender" options={hideStack} />
    </Stack>
  );
}
