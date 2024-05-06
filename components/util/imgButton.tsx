import { DimensionValue, Pressable, StyleSheet, Text } from "react-native";

export default function ImgButton({
  onPress,
  btnWidth,
  btnText,
  btnFont = "InterMedium",
}: {
  onPress?: () => void;
  btnWidth: DimensionValue | undefined;
  btnText: string;
  btnFont?: string | undefined;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.myButton,
        backgroundColor: "#ddd",
        width: btnWidth,
      }}
    >
      <Text
        style={{
          ...styles.btnText,
          fontFamily: `${btnFont}`,
          color: "#444",
        }}
      >
        {btnText}
      </Text>
    </Pressable>
  );
}

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
