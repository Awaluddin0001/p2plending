import { useState } from "react";
import { Link } from "expo-router";
import { Text, View, StyleSheet, ScrollView, Modal } from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";

export default function DocPerjanjian() {
  const [isDisable, setIsDisable] = useState(true);

  const endScroll = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: {
    layoutMeasurement: { height: number; width: number };
    contentOffset: { y: number };
    contentSize: { height: number; width: number };
  }) => {
    const paddingToBottom = 60;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <View style={styles.wraperSection}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "95%", paddingTop: 15 }}
      ></ScrollView>
      {/* <Link href="#" onPress={() => isPressed}>
        kembali
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSection: {
    flex: 0.9,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  normalText: {
    fontFamily: "InterRegular",
    textAlign: "left",
    width: "100%",
  },
  headerText: {
    fontFamily: "InterSemiBold",
    fontSize: 16,
    textAlign: "left",
    width: "20%",
    color: `${color.primary}`,
  },
  mainheaderText: {
    fontFamily: "InterSemiBold",
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    color: `${color.primary}`,
  },
  wrapperCheckbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  wrapperText: {
    flexDirection: "row",
    marginBottom: 15,
  },
});
