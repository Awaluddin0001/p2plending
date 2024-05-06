// import { SketchCanvas } from "@wwimmo/react-native-sketch-canvas";

import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import SignatureView from "react-native-signature-canvas";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";
export default function TandaTangan() {
  const router = useRouter();
  const [signature, setSign] = useState(null as string | null);
  const [isSign, setIssign] = useState(false as boolean);

  const handleOK = (sign: string) => {
    setSign(sign);
    setIssign(true);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: ${color.primary};
      color: #FFF;
    }
    .m-signature-pad {
      height: 300px;
    }
    .m-signature-pad--body {
      border: 2px solid  ${color.primary};
      height: 300px
    }`;

  //   const routeHandler = () => {
  //     router.push(`${process.env.EXPO_PUBLIC_ROUTE_BORROWER_DASH}/regComplete`);
  //   };

  // code here

  return (
    <View style={styles.wraperSection}>
      <Text style={styles.normalText}>Silahkan Tanda Tangan</Text>
      <View style={styles.preview}>
        {isSign ? (
          <Image
            resizeMode={"contain"}
            style={styles.myImage}
            // source={{ uri: signature }}
          />
        ) : (
          <Text>Belum ada tanda tangan</Text>
        )}
      </View>
      {isSign ? (
        <View style={styles.thisBtn}>
          <MyButton
            btnText="Selanjutnya"
            btnType="primary"
            btnWidth="90%"
            // onPress={routeHandler}
          />
        </View>
      ) : (
        <SignatureView
          onOK={handleOK}
          onEmpty={handleEmpty}
          descriptionText="Tanda Tangan"
          clearText="Hapus"
          confirmText="Simpan"
          webStyle={style}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSection: {
    flex: 1,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  normalText: {
    fontFamily: "InterRegular",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 50,
  },
  container: {
    flex: 1,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  thisBtn: {
    marginBottom: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: "100%",
  },
});
