import CryptoJS from "crypto-js";
import * as FileSystem from "expo-file-system";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import Signature from "react-native-signature-canvas";

import MyButton from "@/components/util/myButton";
import { useSignatureUploader } from "@/components/util/uploadImage";
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";
import { appDimension } from "@/constants/Sizes";

export default function RegTtd() {
  const [signature, setSign] = useState("");
  const [isSign, setIssign] = useState(false);
  const router = useRouter();
  const [image, setImage] = useState("");
  const { id_ub } = useLocalSearchParams();

  const {
    isUpload: isImageUploaded,
    loading: imageLoading,
    uploadSign,
  } = useSignatureUploader();

  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  const style = `.m-signature-pad--footer
  .button {
    background-color: ${color.primary};
    color: #FFF;
  }
  body,html {
    width:  ${appDimension.widthScreen}px; height: ${appDimension.heightScreen * 0.6}px;}`;

  const handleOK = async (sign: string) => {
    const encrypFilename = id_ub
      ? CryptoJS.SHA1(id_ub as string, {
          key: process.env.EXPO_PUBLIC_SECRET_KEY,
        }).toString()
      : "";
    try {
      const path = FileSystem.cacheDirectory + "sign.png";
      await FileSystem.writeAsStringAsync(
        path,
        sign.replace("data:image/png;base64,", ""),
        { encoding: FileSystem.EncodingType.Base64 }
      );
      const fileInfo = await FileSystem.getInfoAsync(path);
      setSign(fileInfo.uri);
      setImage(`${encrypFilename}.png`);
      setIssign(true);
      const ImageData = {
        uri: fileInfo.uri,
        name: `${encrypFilename}.jpg`,
        type: "image/jpeg",
      };

      uploadSign(ImageData, "/signborrower");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmpty = () => {
    setImage(``);
  };

  const routeHandler = async () => {
    const body = {
      id_ub,
      sign: image,
    };

    await fetchDataApi1(
      "post",
      `${process.env.EXPO_PUBLIC_BASE_URL}`,
      `${process.env.EXPO_PUBLIC_SERVICE_A1}`,
      "/signUser",
      body
    );
  };

  useEffect(() => {
    if (responseApi1) {
      if (responseApi1.message) {
        if (responseApi1.message === "success") {
          router.push(`/registrasiComplete`);
        } else {
          responseApi1.message = "";
          Alert.alert(
            "gagal",
            "ada maintenance pada server coba lagi beberapa saat kemudian"
          );
        }
      }
    }
  }, [responseApi1, id_ub, router]);

  return (
    <View style={styles.wraperSection}>
      {loadingApi1 ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Text style={styles.normalText}>Silahkan Tanda Tangan</Text>
          <View style={styles.preview}>
            {imageLoading ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : isImageUploaded ? (
              <Image
                resizeMode="contain"
                style={styles.myImage}
                source={{ uri: signature }}
              />
            ) : (
              <Text>Belum ada tanda tangan</Text>
            )}
          </View>
          {imageLoading ? (
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
            <Signature
              onOK={handleOK}
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
    height: appDimension.heightScreen,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 5,
  },
  normalText: {
    fontFamily: "InterRegular",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  preview: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  thisBtn: {
    marginBottom: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: appDimension.widthScreen,
    height: appDimension.heightScreen * 0.75,
  },
});
