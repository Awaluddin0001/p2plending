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
  testID?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  btnType,
  btnWidth,
  btnText,
  btnFont = "InterMedium",
  btnDisable = false,
  testID,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.myButton,
        {
          backgroundColor:
            btnType === "primary"
              ? color.primary
              : btnType === "secondary"
                ? color.secondary
                : "#ddd",
          width: btnWidth,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      disabled={btnDisable}
      testID={testID}
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
