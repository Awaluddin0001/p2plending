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
} from "react-native";

import InputDate from "@/components/util/inputDate";
import MyButton from "@/components/util/myButton";
import RegisterPlace from "@/components/util/registerPlace";
import { color } from "@/constants/Colors";

// import { postApiBs } from "../../../../src/components/util/BorrowerService";
// import { postDavS } from "../../../../src/components/util/DavestService";

type inputType = {
  nativeEvent: { text: string };
};

export default function DataPribadi() {
  const router = useRouter();
  const { id_ub } = useLocalSearchParams();
  const [isDone, setIsdone] = useState(false);
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

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const routeHandler = async () => {
    const body = {
      id_ub: id_ub,
      nik: nik,
      name: name,
      gender: gender,
      birthplace: birthPlace,
      birthdate: birthDate,
      profession: job,
      country: country,
      address: jalan,
      province: provinsi,
      city: kotaName,
      district: kecName,
      subdistrict: kelName,
      postalcode: kodePos,
      marital,
      tanggungan,
    };

    const min = 10000;
    const max = 99999;

    // Generate a random number between min and max (inclusive)
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    const davs = {
      id_ub,
      name,
      counter: randomNum,
      alamat: jalan,
      provinsi: provinsi,
      kota: kotaName,
      kecamatan: kecName,
      kelurahan: kelName,
      kodepos: kodePos,
    };

    // await postDavS(davs, "/api/davestpay/detail", setLoading);
    // postApiBs(body, "/api/borrower/detailUser", setData, setLoading);
    // router.push(
    //   `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/lengkapiDataUsaha`
    // );
  };

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
      setIsdone(true);
    } else {
      setIsdone(false);
    }
  };

  useEffect(() => {
    validForm();
    // if (data.message == "success") {
    //   router.push(
    //     `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/lengkapiDataUsaha`
    //   );
    // }
  }, [
    nik,
    name,
    gender,
    birthPlace,
    birthDate,
    job,
    jalan,
    provinsi,
    kotaName,
    kecName,
    kelName,
    kodePos,
    country,
    data,
  ]);

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
            <Text style={styles.headerText}>Data Pribadi :</Text>
            <Text style={styles.labelText}>NIK*</Text>
            <TextInput
              keyboardType="numeric"
              inputMode="numeric"
              style={styles.inputStyle}
              onEndEditing={getNik}
              maxLength={16}
            />
            <Text style={styles.labelText}>Nama*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              onEndEditing={getName}
            />
            <Text style={styles.labelText}>Jenis Kelamin*</Text>
            <Picker
              selectedValue={gender}
              onValueChange={selectGender}
              style={styles.pickerStyle}
            >
              <Picker.Item label={"Pria"} value={"pria"} key={"L"} />
              <Picker.Item label={"Perempuan"} value={"perempuan"} key={"P"} />
            </Picker>
            <Text style={styles.labelText}>Tempat Lahir*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              onEndEditing={getBirthPlace}
            />
            <Text style={styles.labelText}>Tanggal Lahir*</Text>
            <InputDate onClick={getBirthDate} />
            <Text style={styles.labelText}>Pekerjaan*</Text>
            <Picker
              selectedValue={job}
              onValueChange={selectJob}
              style={styles.pickerStyle}
            >
              <Picker.Item label={"POLRI"} value={"POLRI"} key={"POLRI"} />
              <Picker.Item label={"TNI"} value={"TNI"} key={"TNI"} />
              <Picker.Item
                label={"Pengacara"}
                value={"Pengacara"}
                key={"Pengacara"}
              />
              <Picker.Item
                label={"Wiraswasta"}
                value={"Wiraswasta"}
                key={"Wiraswasta"}
              />
              <Picker.Item
                label={"Pegawai Swasta"}
                value={"PegawaiSwasta"}
                key={"PegawaiSwasta"}
              />
              <Picker.Item
                label={"Lainnya"}
                value={"Lainnya"}
                key={"Lainnya"}
              />
            </Picker>
            {job == "Lainnya" && (
              <TextInput
                keyboardType="default"
                inputMode="text"
                placeholder="Silahkan ketik pekerjaan anda ex: Freelance"
                style={styles.inputStyle}
                onEndEditing={getJob}
              />
            )}
            <Text style={styles.labelText}>Status Perkawinan</Text>
            <Picker
              selectedValue={marital}
              onValueChange={selectMarital}
              style={styles.pickerStyle}
            >
              <Picker.Item label={"kawin"} value={"kawin"} key={"kawin"} />
              <Picker.Item
                label={"belum kawin"}
                value={"belum kawin"}
                key={"belum kawin"}
              />
            </Picker>
            <Text style={styles.labelText}>Jumlah Tanggungan</Text>
            <TextInput
              keyboardType="numeric"
              inputMode="numeric"
              style={styles.inputStyle}
              onEndEditing={getTanggungan}
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
            btnType={isDone && "primary"}
            btnWidth="100%"
            onPress={routeHandler}
            btnDisable={!isDone}
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
