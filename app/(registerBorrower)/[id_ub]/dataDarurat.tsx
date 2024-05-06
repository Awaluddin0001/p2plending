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
} from "react-native";

import MyButton from "@/components/util/myButton";
import { color } from "@/constants/Colors";
// import { postApiBs } from "../../../../src/components/util/BorrowerService";
// import { postEB } from "../../../../src/components/util/EventBus";

export default function DataDarurat() {
  const router = useRouter();
  const { id_ub } = useLocalSearchParams();
  const [isDone, setIsdone] = useState(false);
  const [name, setName] = useState("");
  const [hubungan, setHubungan] = useState("ayah");
  const [handphone, setHandphone] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState<{
    data?: {
      data?: string;
    };
    message?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const routeHandler = async () => {
    const body = {
      id_ub: id_ub,
      ename: name,
      ephone: handphone,
      relation: hubungan,
      eaddress: address,
    };

    const davs = {
      id_ub,
    };

    // await postEB(davs, "/api/eventbus/regisDavest", setLoading);
    // postApiBs(body, "/api/borrower/emergencyUser", setData, setLoading);
  };
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
      setIsdone(true);
    } else {
      setIsdone(false);
    }
  };

  //   useEffect(() => {
  //     validForm();
  //     if (data.message === "success") {
  //       //   router.push(
  //       //     `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_REGISTER}/${id_ub}/fotoLuartoko`
  //       //   );
  //     }
  //   }, [name, hubungan, handphone, address, data]);

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
    flex: 0.9,
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
