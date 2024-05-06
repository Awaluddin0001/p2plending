import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { Text } from "@/components/Themed";
export default function AppLayout() {
  const tabLabelStylee = (focused: boolean, name: string) => (
    <Text
      style={{
        color: focused ? "#00B0B0" : "#aaa",
        marginBottom: 3,
        fontSize: 10,
      }}
    >
      {name}
    </Text>
  );

  const tabIconStylee = (focused: boolean, name: any) => (
    <FontAwesome name={name} size={24} color={focused ? "#00B0B0" : "#aaa"} />
  );

  return (
    <Tabs>
      <Tabs.Screen
        name="[id_ub]/home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => tabIconStylee(focused, "home"),
          tabBarLabel: ({ focused }) => tabLabelStylee(focused, "Home"),
        }}
        key="homepage"
      />

      <Tabs.Screen
        name="[id_ub]/pinjam"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => tabIconStylee(focused, "money"),
          tabBarLabel: ({ focused }) => tabLabelStylee(focused, "Pinjam"),
        }}
        key="lendingpage"
      />

      <Tabs.Screen
        name="[id_ub]/setting"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => tabIconStylee(focused, "gear"),
          tabBarLabel: ({ focused }) => tabLabelStylee(focused, "Setting"),
        }}
        key="settingpage"
      />

      <Tabs.Screen
        name="[id_ub]/tandaTangan"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="[id_ub]/faceBiometric"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="[id_ub]/ktpVerif"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="[id_ub]/bayar"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="[id_ub]/docPerjanjian"
        options={{ headerShown: false, href: null }}
      />
    </Tabs>
  );
}
