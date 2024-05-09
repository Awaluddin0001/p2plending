import CryptoJS from "crypto-js";
import * as ImagePicker from "expo-image-picker";
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

import MyButton from "@/components/util/myButton";
import useApi from "@/components/util/useApi";
import { useImageUploader } from "@/components/util/uploadImage";
import { color } from "@/constants/Colors";

export default function KtpVerif() {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [pickedImage, setPickedImage] = useState<string | undefined>();
  const [image, setImage] = useState("");
  const router = useRouter();
  const { id_ub } = useLocalSearchParams();
  const {
    isUpload: isImageUploaded,
    loading: imageLoading,
    uploadImage,
  } = useImageUploader();

  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  async function verifyPermissions() {
    if (status) {
      if (status.status !== ImagePicker.PermissionStatus.GRANTED) {
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
      }
    }

    return true;
  }

  async function takePictureHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      cameraType: ImagePicker.CameraType.back,
      // aspect: [4, 3],
      quality: 0.55,
    });

    const encrypFilename = id_ub
      ? CryptoJS.SHA1(id_ub as string, {
          key: process.env.EXPO_PUBLIC_SECRET_KEY,
        }).toString()
      : "";

    if (!image.canceled) {
      setImage(`${encrypFilename}.jpg`);
      const ImageData = {
        uri: image.assets[0].uri,
        name: `${encrypFilename}.jpg`,
        type: "image/jpeg",
      };
      setPickedImage(image.assets[0].uri);
      uploadImage(ImageData, "/ktp");
    }
  }

  const routeHandler = async () => {
    const body = {
      id_ub,
      ktp: image,
    };

    await fetchDataApi1(
      "post",
      `${process.env.EXPO_PUBLIC_BASE_URL}`,
      `${process.env.EXPO_PUBLIC_SERVICE_A1}`,
      "/ktpUser",
      body
    );
  };

  //   useEffect(() => {
  //     if (data.message == "success") {
  //       router.push(
  //         `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_DASH}/${id_ub}/faceBiometric`
  //       );
  //     }
  //   }, [data, isUpload]);

  useEffect(() => {
    if (responseApi1) {
      if (responseApi1.message) {
        if (responseApi1.message === "success") {
          router.push(`/${id_ub}/faceBiometric`);
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
      <Text>Verifi KTP</Text>
      {loadingApi1 ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Text style={styles.normalText}>
            Harap hasil foto cukup jelas dan tidak blur
          </Text>
          <View style={styles.viewImage}>
            {imageLoading ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : isImageUploaded ? (
              <Image
                source={{ uri: pickedImage }}
                style={styles.myImage}
                resizeMode="contain"
              />
            ) : (
              <Text>No Image Uploaded</Text>
            )}
          </View>
          <MyButton
            onPress={takePictureHandler}
            btnText={isImageUploaded ? "Ambil ulang foto" : "Ambil foto"}
            btnWidth="90%"
            btnType="secondary"
          />
          {isImageUploaded && (
            <MyButton
              btnText="Selanjutnya"
              btnType="primary"
              btnWidth="90%"
              onPress={routeHandler}
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
  },
  normalText: {
    fontFamily: "InterRegular",
    textAlign: "center",
  },
  viewImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  myImage: {
    width: "100%",
    height: "100%",
  },
});
