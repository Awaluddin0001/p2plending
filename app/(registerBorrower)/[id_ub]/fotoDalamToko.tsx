import CryptoJS from "crypto-js";
import * as ImagePicker from "expo-image-picker";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";
// import { uploadImage } from "../../../../src/components/util/uploadImage";
// import { postApiBs } from "../../../../src/components/util/BorrowerService";

export default function FotoDalamToko() {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();
  const [image, setImage] = useState("");
  const router = useRouter();
  const { id_ub } = useLocalSearchParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isUpload, setIsupload] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);

  async function verifyPermissions() {
    if (status) {
      if (status.status !== ImagePicker.PermissionStatus.GRANTED) {
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
      }
    }

    return true;
  }
  //   const encrypFilename = CryptoJS.SHA1(
  //     id_ub as string,
  //     // process.env.EXPO_PUBLIC_SECRET_KEY
  //   ).toString();
  async function takePictureHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      cameraType: ImagePicker.CameraType.back,
      aspect: [4, 3],
      quality: 0.6,
    });
    // console.log(encrypFilename);

    // if (!image.canceled) {
    //   setImage(`${encrypFilename}.jpg`);
    //   // setImage(`1234.jpg`);
    //   setPickedImage(image.assets[0].uri);
    //   uploadImage(
    //     image.assets[0].uri,
    //     "/api/image/tokodalam",
    //     encrypFilename,
    //     // "testing",
    //     setIsupload,
    //     setLoadingUpload
    //   );
    // }
  }

  const routeHandler = () => {
    const body = {
      id_ub: id_ub,
      insideviewbusiness: image,
    };

    // postApiBs(body, "/api/borrower/tokodalam", setData, setLoading);
    // router.push(
    //   `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/tandaTangan`
    // );
  };

  //   useEffect(() => {
  //     if (data.message === "success") {
  //       router.push(
  //         `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/tandaTangan`
  //       );
  //     }
  //   }, [data, isUpload]);

  return (
    <View style={styles.wraperSection}>
      {loading ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <Text style={styles.normalText}>
            Harap hasil foto cukup jelas dan tidak blur
          </Text>
          <View style={styles.viewImage}>
            {loadingUpload ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : isUpload ? (
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
            btnText={isUpload ? "Ambil ulang foto" : "Ambil foto"}
            btnWidth="90%"
            btnType="secondary"
          />
          {isUpload && (
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
    fontFamily: "Inter_400Regular",
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
    width: "90%",
    height: "100%",
    objectFit: "cover",
  },
});
