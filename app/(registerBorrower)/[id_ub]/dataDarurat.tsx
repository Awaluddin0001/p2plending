import { Picker } from "@react-native-picker/picker";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";

import MyButton from "@/components/util/myButton";
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";

export default function DataDarurat() {
  const router = useRouter();
  const { id_ub } = useLocalSearchParams();
  const [name, setName] = useState("");
  const [hubungan, setHubungan] = useState("ayah");
  const [handphone, setHandphone] = useState("");
  const [address, setAddress] = useState("");
  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  const getName = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setName(text);
  };
  const getAddress = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setAddress(text);
  };
  const selectHubungan = (val: string) => {
    setHubungan(val);
  };
  const getHandphone = ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setHandphone(text);
  };

  const validForm = () => {
    if (name && hubungan && handphone && address) {
      return true;
    } else {
      return false;
    }
  };
  const routeHandler = async () => {
    const body = {
      id_ub,
      ename: name,
      ephone: handphone,
      relation: hubungan,
      eaddress: address,
    };

    const notEmpty = validForm();

    if (notEmpty) {
      await fetchDataApi1(
        "post",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_A1}`,
        "/emergencyUser",
        body
      );
    }
  };

  useEffect(() => {
    validForm();
    if (responseApi1) {
      if (responseApi1.message) {
        if (responseApi1.message === "success") {
          router.push(`/${id_ub}/fotoDalamToko`);
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
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", paddingTop: 15 }}
          >
            <Text style={styles.normalText}>
              Pastikan semua data di isi dengan benar :
            </Text>
            <Text style={styles.headerText}>Data Kontak Darurat :</Text>
            <Text style={styles.labelText}>Nama Kontak Darurat*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              style={styles.inputStyle}
              onEndEditing={getName}
            />
            <Text style={styles.labelText}>Hubungan Kontak Darurat*</Text>
            <Picker
              selectedValue={hubungan}
              onValueChange={selectHubungan}
              style={styles.pickerStyle}
            >
              <Picker.Item label={"ayah"} value={"ayah"} key={"ayah"} />
              <Picker.Item label={"ibu"} value={"ibu"} key={"ibu"} />
              <Picker.Item label={"paman"} value={"paman"} key={"paman"} />
              <Picker.Item label={"tante"} value={"tante"} key={"tante"} />
              <Picker.Item label={"kakak"} value={"kakak"} key={"kakak"} />
              <Picker.Item label={"adik"} value={"adik"} key={"adik"} />
              <Picker.Item label={"atasan"} value={"atasan"} key={"atasan"} />
              <Picker.Item label={"suami"} value={"suami"} key={"suami"} />
              <Picker.Item label={"istri"} value={"istri"} key={"istri"} />
            </Picker>
            <Text style={styles.labelText}>
              Nomor Handphone Kontak Darurat*
            </Text>
            <TextInput
              keyboardType="numeric"
              inputMode="numeric"
              placeholder="contoh: 08xxxxxxxx"
              style={styles.inputStyle}
              onEndEditing={getHandphone}
            />
            <Text style={styles.labelText}>Alamat Kontak Darurat*</Text>
            <TextInput
              keyboardType="default"
              inputMode="text"
              placeholder="contoh: jln. kemerdekaan B1/01"
              style={styles.inputStyle}
              onEndEditing={getAddress}
            />
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
    flex: 0.9,
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
