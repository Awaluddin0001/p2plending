import { Picker } from "@react-native-picker/picker";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";

import InputDate from "@/components/util/inputDate";
import MyButton from "@/components/util/myButton";
import RegisterPlace from "@/components/util/registerPlace";
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";
type inputType = {
  nativeEvent: { text: string };
};

export default function DataPribadiLender() {
  const router = useRouter();
  const { id_ul } = useLocalSearchParams();
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("pria");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [job, setJob] = useState("POLRI");
  const [marital, setMarital] = useState("kawin");
  const [tanggungan, setTanggungan] = useState("0");

  // untuk alamat
  const [jalan, setJalan] = useState("");
  const [country, setCountry] = useState("indonesia");
  const [provinsi, setProvinsi] = useState("");
  const [kotaName, setKotaname] = useState("");
  const [kecName, setKecname] = useState("");
  const [kelName, setKelname] = useState("");
  const [kodePos, setKodepos] = useState("");

  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  const getNik = ({ nativeEvent: { text } }: inputType) => {
    setNik(text);
  };
  const getTanggungan = ({ nativeEvent: { text } }: inputType) => {
    setTanggungan(text);
  };
  const getName = ({ nativeEvent: { text } }: inputType) => {
    setName(text);
  };
  const selectGender = (val: string) => {
    setGender(val);
  };
  const selectMarital = (val: string) => {
    setMarital(val);
  };
  const getBirthPlace = ({ nativeEvent: { text } }: inputType) => {
    setBirthPlace(text);
  };
  const getBirthDate = (val: Date) => {
    setBirthDate(val);
  };

  const selectJob = (val: string) => {
    setJob(val);
  };
  const getJob = ({ nativeEvent: { text } }: inputType) => {
    setJob(text);
  };

  const validForm = () => {
    if (
      nik &&
      name &&
      gender &&
      birthPlace &&
      birthDate &&
      job &&
      jalan &&
      country &&
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

  const routeHandler = async () => {
    const body = {
      id_ul,
      nik,
      name,
      gender,
      birthplace: birthPlace,
      birthdate: birthDate,
      profession: job,
      country,
      address: jalan,
      province: provinsi,
      city: kotaName,
      district: kecName,
      subdistrict: kelName,
      postalcode: kodePos,
      marital,
      tanggungan,
    };

    const notEmpty = validForm();

    if (notEmpty) {
      await fetchDataApi1(
        "post",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_B1}`,
        "/detailUser",
        body
      );
    }
  };

  useEffect(() => {
    if (responseApi1) {
      if (responseApi1.message) {
        if (responseApi1.message === "success") {
          router.push(`/${id_ul}/dataUsahaLender`);
        } else {
          responseApi1.message = "";
          Alert.alert(
            "gagal",
            "ada maintenance pada server coba lagi beberapa saat kemudian"
          );
        }
      }
    }
  }, [responseApi1, router, id_ul]);

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
            <Text style={styles.headerText}>Data Pribadi :</Text>
            <Text style={styles.labelText}>NIK*</Text>
            <TextInput
              keyboardType="numeric"
              inputMode="numeric"
              style={styles.inputStyle}
              onChange={getNik}
              maxLength={16}
            />
            <Text style={styles.labelText}>Nama*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              onChange={getName}
            />
            <Text style={styles.labelText}>Jenis Kelamin*</Text>
            <Picker
              selectedValue={gender}
              onValueChange={selectGender}
              style={styles.pickerStyle}
            >
              <Picker.Item label="Pria" value="pria" key="L" />
              <Picker.Item label="Perempuan" value="perempuan" key="P" />
            </Picker>
            <Text style={styles.labelText}>Tempat Lahir*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              onChange={getBirthPlace}
            />
            <Text style={styles.labelText}>Tanggal Lahir*</Text>
            <InputDate onClick={getBirthDate} />
            <Text style={styles.labelText}>Pekerjaan*</Text>
            <Picker
              selectedValue={job}
              onValueChange={selectJob}
              style={styles.pickerStyle}
            >
              <Picker.Item label="POLRI" value="POLRI" key="POLRI" />
              <Picker.Item label="TNI" value="TNI" key="TNI" />
              <Picker.Item
                label="Pengacara"
                value="Pengacara"
                key="Pengacara"
              />
              <Picker.Item
                label="Wiraswasta"
                value="Wiraswasta"
                key="Wiraswasta"
              />
              <Picker.Item
                label="Pegawai Swasta"
                value="PegawaiSwasta"
                key="PegawaiSwasta"
              />
              <Picker.Item label="Lainnya" value="Lainnya" key="Lainnya" />
            </Picker>
            {job === "Lainnya" && (
              <TextInput
                keyboardType="default"
                inputMode="text"
                placeholder="Silahkan ketik pekerjaan anda ex: Freelance"
                style={styles.inputStyle}
                onChange={getJob}
              />
            )}
            <Text style={styles.labelText}>Status Perkawinan</Text>
            <Picker
              selectedValue={marital}
              onValueChange={selectMarital}
              style={styles.pickerStyle}
            >
              <Picker.Item label="kawin" value="kawin" key="kawin" />
              <Picker.Item
                label="belum kawin"
                value="belum kawin"
                key="belum kawin"
              />
            </Picker>
            <Text style={styles.labelText}>Jumlah Tanggungan</Text>
            <TextInput
              keyboardType="numeric"
              inputMode="numeric"
              style={styles.inputStyle}
              onChange={getTanggungan}
              maxLength={2}
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
            {/* <Text style={styles.labelText}>Nomor Rekening</Text>
          <TextInput
            keyboardType="numeric"
            inputMode="numeric"
            style={styles.inputStyle}
          /> */
            /* <Text style={styles.labelText}>NPWP</Text>
          <TextInput
            keyboardType="numeric"
            inputMode="numeric"
            style={styles.inputStyle}
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
