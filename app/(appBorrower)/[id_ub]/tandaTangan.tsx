import CryptoJS from "crypto-js";
import * as FileSystem from "expo-file-system";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";
import SignatureView from "react-native-signature-canvas";

// import { useFonts } from "../../../../src/components/bundle/importHeader";
// import { uploadSign } from "../../../../src/components/util/uploadImage";
// import { postApiBs } from "../../../../src/components/util/BorrowerService";
import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";

export default function TandaTangan() {
  const [signature, setSign] = useState(null);
  const [isSign, setIssign] = useState(false);
  const router = useRouter();
  const { id_ub } = useLocalSearchParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isUpload, setIsupload] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [image, setImage] = useState("");

  //   const encrypFilename = CryptoJS.SHA1(
  //     id_ub,
  //     process.env.EXPO_PUBLIC_SECRET_KEY
  //   ).toString();

  //   const handleOK = async (sign) => {
  //     try {
  //       const path = FileSystem.cacheDirectory + "sign.png";
  //       await FileSystem.writeAsStringAsync(
  //         path,
  //         sign.replace("data:image/png;base64,", ""),
  //         { encoding: FileSystem.EncodingType.Base64 }
  //       );
  //       const fileInfo = await FileSystem.getInfoAsync(path);
  //       setSign(fileInfo.uri);
  //       setIssign(true);
  //       uploadSign(
  //         fileInfo.uri,
  //         "/api/image/signborrower",
  //         encrypFilename,
  //         setIsupload,
  //         setLoadingUpload
  //       );
  //       setImage(`${encrypFilename}.png`);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const handleEmpty = () => {
    setImage(``);
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

  const routeHandler = () => {
    const body = {
      id_ub: id_ub,
      sign: image,
    };
    // postApiBs(body, "/api/borrower/signUser", setData, setLoading);
    // router.push(
    //   `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_DASH}/${id_ub}/pinjam`
    // );
  };

  //   useEffect(() => {
  //     if (data.message == "success") {
  //       // router.push(
  //       //   `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_DASH}/${id_ub}/pinjam`
  //       // );
  //       router.replace(`/`);
  //     }
  //   }, [data, isUpload]);

  return (
    <View style={styles.wraperSection}>
      {loading ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Text style={styles.normalText}>Silahkan Tanda Tangan</Text>
          <View style={styles.preview}>
            {loadingUpload ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : isSign ? (
              <Image
                resizeMode={"contain"}
                style={styles.myImage}
                // source={{ uri: signature }}
              />
            ) : (
              <Text>Belum ada tanda tangan</Text>
            )}
          </View>
          {loadingUpload ? (
            <ActivityIndicator size="large" color={color.primary} />
          ) : isSign ? (
            <View style={styles.thisBtn}>
              <MyButton
                btnText="Selanjutnya"
                btnType="primary"
                btnWidth="90%"
                onPress={routeHandler}
              />
            </View>
          ) : (
            <SignatureView
              // onOK={handleOK}
              onEmpty={handleEmpty}
              descriptionText="Tanda Tangan"
              clearText="Hapus"
              confirmText="Simpan"
              webStyle={style}
            />
          )}
        </>
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
    fontFamily: "Inter_400Regular",
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
