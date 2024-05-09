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
        name="[id_ub]/pinRegistration"
        options={stackScreen(`${tagRegis}Buat Pin Baru`)}
      />
      <Stack.Screen
        name="[id_ub]/pinVerification"
        options={stackScreen(`${tagRegis}Verifikasi Pin`)}
      />
      <Stack.Screen
        name="[id_ub]/dataPribadi"
        options={stackScreen(`${tagRegis}Lengkapi Data Pribadi`)}
      />
      <Stack.Screen
        name="[id_ub]/dataUsaha"
        options={stackScreen(`${tagRegis}Lengkapi Data Usaha`)}
      />
      <Stack.Screen
        name="[id_ub]/dataDarurat"
        options={stackScreen(`${tagRegis}Lengkapi Data Darurat`)}
      />
      <Stack.Screen
        name="[id_ub]/fotoDalamToko"
        options={stackScreen(`${tagRegis}Foto Dalam Toko`)}
      />
      <Stack.Screen
        name="[id_ub]/fotoLuarToko"
        options={stackScreen(`${tagRegis}Foto Luar Toko`)}
      />
      <Stack.Screen
        name="[id_ub]/regTtd"
        options={stackScreen(`${tagRegis}Tanda Tangan`)}
      />
      <Stack.Screen name="registrasiComplete" options={hideStack} />
    </Stack>
  );
}
