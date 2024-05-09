import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native";

import { color } from "@/constants/Colors";
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
        name="[id_ul]/home"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: `${color.primary}`,
          },
          tabBarIcon: ({ focused }) => tabIconStylee(focused, "home"),
          tabBarLabel: ({ focused }) => tabLabelStylee(focused, "Home"),
        }}
      />
      <Tabs.Screen
        name="[id_ul]/permintaan"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => tabIconStylee(focused, "money"),
          tabBarLabel: ({ focused }) => tabLabelStylee(focused, "Permintaan"),
        }}
      />
      <Tabs.Screen
        name="[id_ul]/setting"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => tabIconStylee(focused, "gear"),
          tabBarLabel: ({ focused }) => tabLabelStylee(focused, "Setting"),
        }}
      />
      <Tabs.Screen
        name="[id_ul]/tandaTangan"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="[id_ul]/detail"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="[id_ul]/waitingApprove"
        options={{ headerShown: false, href: null }}
      />
    </Tabs>
  );
}
