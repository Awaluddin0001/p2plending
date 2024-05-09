import CryptoJS from "crypto-js";
import * as ImagePicker from "expo-image-picker";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";

import ImgButton from "@/components/util/imgButton";
import InputDate from "@/components/util/inputDate";
import MyButton from "@/components/util/myButton";
import RegisterPlace from "@/components/util/registerPlace";
import { useImageUploader } from "@/components/util/uploadImage";
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";

type typeInput = {
  nativeEvent: {
    text: string;
  };
};

export default function DataUsahaLender() {
  const router = useRouter();
  const { id_ul } = useLocalSearchParams<{ id_ul: string }>();
  // detail usaha
  const [namaUsaha, setNamausaha] = useState("");
  const [bentukUsaha, setBentukusaha] = useState("");
  const [bidangUsaha, setBidangusaha] = useState("");
  const [nomorTelfonusaha, setNomortelfonusaha] = useState("");
  const [sumberDana, setSumberdana] = useState("");
  const [tanggalPendirianUsaha, setTanggalPendirianUSaha] = useState(
    new Date()
  );
  // image upload
  const [nomorIzinusaha, setNomorizinusaha] = useState("");

  // untuk alamat
  const [jalan, setJalan] = useState("");
  const [country, setCountry] = useState("indonesia");
  const [provinsi, setProvinsi] = useState("");
  const [kotaName, setKotaname] = useState("");
  const [kecName, setKecname] = useState("");
  const [kelName, setKelname] = useState("");
  const [kodePos, setKodepos] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const validForm = () => {
    if (
      namaUsaha &&
      bentukUsaha &&
      bidangUsaha &&
      nomorTelfonusaha &&
      country &&
      jalan &&
      provinsi &&
      kotaName &&
      kecName &&
      kelName &&
      kodePos
    ) {
      return true;
    } else {
      return false;
    }
  };

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

  // fungsi untuk usaha
  const insertNamausaha = ({ nativeEvent: { text } }: typeInput) => {
    setNamausaha(text);
  };
  const insertBentukusaha = ({ nativeEvent: { text } }: typeInput) => {
    setBentukusaha(text);
  };
  const insertBidangusaha = ({ nativeEvent: { text } }: typeInput) => {
    setBidangusaha(text);
  };
  const insertNomortelepon = ({ nativeEvent: { text } }: typeInput) => {
    setNomortelfonusaha(text);
  };
  // const insertSumberdana = ({ nativeEvent: { text } }) => {
  //   setSumberdana(text);
  // };

  const getTanggalPendirianusaha = (val: Date) => {
    setTanggalPendirianUSaha(val);
  };

  const routeHandler = async () => {
    const body = {
      id_ul,
      bname: namaUsaha,
      form: bentukUsaha,
      field: bidangUsaha,
      foundingdate: tanggalPendirianUsaha,
      license: nomorIzinusaha,
      bcountry: country,
      baddress: jalan,
      bprovince: provinsi,
      bcity: kotaName,
      bdistrict: kecName,
      bsubdistrict: kelName,
      bpostalcode: kodePos,
      bphone: nomorTelfonusaha,
      sourcefund: sumberDana,
    };

    const notEmpty = validForm();

    if (notEmpty) {
      await fetchDataApi1(
        "post",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_B1}`,
        "/businessUser",
        body
      );
    }
  };

  useEffect(() => {
    if (responseApi1) {
      if (responseApi1.message) {
        if (responseApi1.message === "success") {
          router.push(`/${id_ul}/fotoDalamTokoLender`);
        } else {
          responseApi1.message = "";
          Alert.alert(
            "gagal",
            "ada maintenance pada server coba lagi beberapa saat kemudian"
          );
        }
      }
    }
  }, [responseApi1, id_ul, router]);

  async function verifyPermissions() {
    if (status) {
      if (status.status !== ImagePicker.PermissionStatus.GRANTED) {
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
      }
    }

    return true;
  }

  const pickImage = async () => {
    const hasPermission = await verifyPermissions();

    const encrypFilename = id_ul
      ? CryptoJS.SHA1(id_ul, {
          key: process.env.EXPO_PUBLIC_SECRET_KEY,
        }).toString()
      : "";

    if (!hasPermission) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.6,
    });

    if (!result.canceled) {
      setNomorizinusaha(`${encrypFilename}.jpg`);
      const ImageData = {
        uri: result.assets[0].uri,
        name: `${encrypFilename}.jpg`,
        type: "image/jpeg",
      };
      uploadImage(ImageData, "/nomorizinusaha");
    }
  };

  return (
    <View style={styles.wraperSection}>
      {loadingApi1 ? (
        <ActivityIndicator size="large" color={color.primary} />
      ) : (
        <>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", paddingTop: 15 }}
          >
            <Text style={styles.normalText}>
              Pastikan semua data di isi dengan benar :
            </Text>
            <Text style={styles.headerText}>Data Usaha :</Text>
            <Text style={styles.labelText}>Nama usaha*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              onChange={insertNamausaha}
            />
            <Text style={styles.labelText}>Bentuk Usaha*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              placeholder="contoh: PT, CV, koperasi, dsb"
              placeholderTextColor="#999"
              style={styles.inputStyle}
              onChange={insertBentukusaha}
            />
            <Text style={styles.labelText}>Bidang Usaha*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              placeholder="contoh: perdagangan, konstruksi, dsb"
              placeholderTextColor="#999"
              style={styles.inputStyle}
              onChange={insertBidangusaha}
            />
            <Text style={styles.labelText}>Tanggal Pendirian Usaha</Text>
            <InputDate onClick={getTanggalPendirianusaha} />
            <Text style={styles.labelText}>Nomor Izin Usaha</Text>
            {imageLoading ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : isImageUploaded ? (
              <Text style={styles.labelTextInfo}>File Uploaded</Text>
            ) : (
              <ImgButton
                btnText="upload file"
                btnWidth="40%"
                onPress={pickImage}
              />
            )}
            <Text style={styles.labelTextInfo}>
              Bisa berupa nomor NIB, SIUP, atau TDP
            </Text>
            <Text style={styles.labelText}>Nomor Telepon Usaha*</Text>
            <TextInput
              keyboardType="numeric"
              inputMode="numeric"
              placeholder="08xxxxxxxxx"
              placeholderTextColor="#999"
              style={styles.inputStyle}
              onChange={insertNomortelepon}
            />
            <RegisterPlace
              provinsi={provinsi}
              setCountry={setCountry}
              setProvinsi={setProvinsi}
              setKotaname={setKotaname}
              setKecname={setKecname}
              setKelname={setKelname}
              setKodepos={setKodepos}
              setJalan={setJalan}
            />
            {/* <Text style={styles.labelText}>Sumber Dana</Text>
              <TextInput
                keyboardType="default"
                inputMode="text"
                style={styles.inputStyle}
                onChange={insertSumberdana}
              /> */}
          </ScrollView>
          <MyButton
            btnText="selanjutnya"
            btnType="primary"
            btnWidth="100%"
            onPress={routeHandler}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSection: {
    flex: 0.95,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
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
    width: "100%",
    marginVertical: 15,
  },
  labelText: {
    fontFamily: "InterMedium",
    fontSize: 14,
    textAlign: "left",
    width: "100%",
  },
  labelTextInfo: {
    fontFamily: "InterMedium",
    fontSize: 10,
    textAlign: "left",
    width: "100%",
    color: "#bbb",
    marginBottom: 10,
  },
  inputStyle: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: "#bbb",
    borderWidth: 2,
  },
  inputStyleNoMargin: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    borderColor: "#bbb",
    borderWidth: 2,
    marginBottom: 15,
  },
  pickerStyle: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: "#bbb",
    borderWidth: 2,
    backgroundColor: "#f2f2f2",
    fontSize: 16,
  },
});
