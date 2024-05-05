import React from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

import { color } from "@/constants/Colors";

interface MyButtonProps {
  onPress?: () => void;
  btnType: string | boolean;
  btnWidth?: ViewStyle["width"];
  btnText: string;
  btnFont?: string;
  btnDisable?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  btnType,
  btnWidth,
  btnText,
  btnFont = "InterMedium",
  btnDisable = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.myButton,
        backgroundColor:
          btnType === "primary"
            ? color.primary
            : btnType === "secondary"
              ? color.secondary
              : "#ddd",
        width: btnWidth, // Pass btnWidth directly without string conversion
      }}
      disabled={btnDisable}
    >
      <Text
        style={{
          ...styles.btnText,
          fontFamily: btnFont,
          color:
            btnType === "primary" || btnType === "secondary" ? "#fff" : "#555",
        }}
      >
        {btnText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  myButton: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
  btnText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default MyButton;
