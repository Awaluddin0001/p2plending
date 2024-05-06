import axios from "axios";
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
import { color } from "@/constants/Colors";

// import { uploadImage } from "../../../../src/components/util/uploadImage";
// import { postApiBs } from "../../../../src/components/util/BorrowerService";

type typeInput = {
  nativeEvent: {
    text: string;
  };
};

export default function DataUsaha() {
  const router = useRouter();
  const { id_ub } = useLocalSearchParams();
  // turn off button
  const [isDone, setIsdone] = useState(false);
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

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [isUpload, setIsupload] = useState(false);
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
      setIsdone(true);
    } else {
      setIsdone(false);
    }
  };

  const routeHandler = () => {
    const body = {
      id_ub: id_ub,
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

    // postApiBs(body, "/api/borrower/businessUser", setData, setLoading);
    // router.push(
    //   `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/lengkapiDataDarurat`
    // );
  };

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

  useEffect(() => {
    validForm();
    // if (data.message == "success") {
    //   router.push(
    //     `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/lengkapiDataDarurat`
    //   );
    // }
  }, [
    namaUsaha,
    bentukUsaha,
    bidangUsaha,
    nomorTelfonusaha,
    country,
    jalan,
    provinsi,
    kotaName,
    kecName,
    kelName,
    kodePos,
    data,
  ]);

  //   const encrypFilename = CryptoJS.SHA1(
  //     id_ub as string,
  //     process.env.EXPO_PUBLIC_SECRET_KEY
  //   ).toString();

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

    if (!hasPermission) {
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.6,
    });

    if (!result.canceled) {
      //   setNomorizinusaha(`${encrypFilename}.jpg`);
      //   uploadImage(
      //     result.assets[0].uri,
      //     "nomorizinusaha",
      //     encrypFilename,
      //     setIsupload,
      //     setLoadingUpload
      //   );
    }
  };

  return (
    <View style={styles.wraperSection}>
      {loading ? (
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
              onEndEditing={insertNamausaha}
            />
            <Text style={styles.labelText}>Bentuk Usaha*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              placeholder="contoh: PT, CV, koperasi, dsb"
              placeholderTextColor="#999"
              style={styles.inputStyle}
              onEndEditing={insertBentukusaha}
            />
            <Text style={styles.labelText}>Bidang Usaha*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              placeholder="contoh: perdagangan, konstruksi, dsb"
              placeholderTextColor="#999"
              style={styles.inputStyle}
              onEndEditing={insertBidangusaha}
            />
            <Text style={styles.labelText}>Tanggal Pendirian Usaha</Text>
            <InputDate onClick={getTanggalPendirianusaha} />
            <Text style={styles.labelText}>Nomor Izin Usaha</Text>
            {loadingUpload ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : isUpload ? (
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
              onEndEditing={insertNomortelepon}
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
                onEndEditing={insertSumberdana}
              /> */}
          </ScrollView>
          <MyButton
            btnText="selanjutnya"
            btnType={isDone && "primary"}
            btnWidth="100%"
            btnDisable={!isDone}
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
    fontFamily: "Inter_400Regular",
    textAlign: "left",
    width: "100%",
  },
  headerText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    marginVertical: 15,
  },
  labelText: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    textAlign: "left",
    width: "100%",
  },
  labelTextInfo: {
    fontFamily: "Inter_500Medium",
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
