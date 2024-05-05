import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { useState, useEffect } from "react";
import { Text, TextInput, StyleSheet } from "react-native";

type inputType = {
  nativeEvent: { text: string };
};

type objectName = {
  name: string;
}[];

interface RegisterPlaceProps {
  provinsi: string;
  setCountry: (country: string) => void;
  setKotaname: (kotaname: string) => void;
  setJalan: (jalan: string) => void;
  setKecname: (kecname: string) => void;
  setKelname: (kelname: string) => void;
  setKodepos: (kodepos: string) => void;
  setProvinsi: (provinsi: string) => void;
}

const RegisterPlace: React.FC<RegisterPlaceProps> = ({
  provinsi,
  setCountry,
  setKotaname,
  setJalan,
  setKecname,
  setKelname,
  setKodepos,
  setProvinsi,
}) => {
  const [negara, setNegara] = useState("indonesia");
  const [kotaId, setKotaid] = useState("11"); //it give province id api rule
  const [kecId, setKecid] = useState("1101");
  const [kelId, setKelid] = useState("1101010");
  const [vilId, setVilid] = useState("1101010001"); // mengarah ke kelurahan
  const [isKota, setisKota] = useState(false);
  const [isKec, setisKec] = useState(false);
  const [isKel, setisKel] = useState(false);
  // fetch data for render
  const [provinsiFetch, setProvinsiFetch] = useState([]);
  const [kotaFetch, setKotaFetch] = useState([]);
  const [kecFetch, setKecFetch] = useState([]);
  const [kelFetch, setKelFetch] = useState([]);
  // fungsi untuk alamat
  const selectNegara = (val: string) => {
    setNegara(val);
  };

  const manualSelectNegara = ({ nativeEvent: { text } }: inputType) => {
    if (negara === "indonesia") {
      setNegara("indonesia");
      setCountry("indonesia");
      return;
    }
    setNegara(text);
    setCountry(text);
  };

  const insertJalan = ({ nativeEvent: { text } }: inputType) => {
    setJalan(text);
  };
  // provinsi
  const foreignSelectProvinsi = ({ nativeEvent: { text } }: inputType) => {
    setProvinsi(text);
  };
  const selectProvinsi = (val: string) => {
    setKotaid(val);
    setKecid(``);
    setKelid(``);
    setVilid(``);
    const provinsiName: objectName = provinsiFetch.filter(
      ({ id, name }) => val === id
    );
    setProvinsi(provinsiName[0]?.name);
  };

  // kota
  const foreignSelectKota = ({ nativeEvent: { text } }: inputType) => {
    setKotaname(text);
    setisKota(true);
  };
  const selectKota = (val: string) => {
    setKecid(val);
    setKelid(``);
    setVilid(``);
    setisKota(true);
    const kotaName: objectName = kotaFetch.filter(({ id, name }) => val === id);
    setKotaname(kotaName[0]?.name);
  };

  // kec
  const foreignSelectKec = ({ nativeEvent: { text } }: inputType) => {
    setKecname(text);
    setisKec(true);
  };
  const selectKec = (val: string) => {
    setKelid(val);
    setVilid(``);
    setisKec(true);
    const kecName: objectName = kecFetch.filter(({ id, name }) => val === id);
    setKecname(kecName[0]?.name);
  };

  // kel
  const foreignSelectKel = ({ nativeEvent: { text } }: inputType) => {
    setKelname(text);
    setisKel(true);
  };
  const selectKel = (val: string) => {
    setVilid(val);
    setisKel(true);
    const kelName: objectName = kelFetch.filter(({ id, name }) => val === id);
    setKelname(kelName[0]?.name);
  };

  const insertKodepos = ({ nativeEvent: { text } }: inputType) => {
    setKodepos(text);
    if (!isKota && !isKec && !isKel) {
      setProvinsi("ACEH");
      setKotaname("KABUPATE SIMEULEU");
      setKecname("TEUPAH SELATAN");
      setKelname("LATIUN");
    }
  };

  const provinsiData = async () => {
    try {
      const response = await axios.get(
        `https://api.doeku.id/api/wilayah/provinces.json`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setProvinsiFetch(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const kotaData = async () => {
    if (kotaId) {
      try {
        const response = await axios.get(
          `https://api.doeku.id/api/wilayah/regencies/${kotaId}.json`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setKotaFetch(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setKotaFetch([]);
    }
  };
  const kecData = async () => {
    if (kecId) {
      try {
        const response = await axios.get(
          `https://api.doeku.id/api/wilayah/districts/${kecId}.json`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setKecFetch(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setKecFetch([]);
    }
  };
  const kelData = async () => {
    if (kelId) {
      try {
        const response = await axios.get(
          `https://api.doeku.id/api/wilayah/villages/${kelId}.json`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setKelFetch(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setKelFetch([]);
    }
  };

  useEffect(() => {
    provinsiData();
  }, []);

  useEffect(() => {
    if (kotaId) {
      kotaData();
      kecData();
      kelData();
    }
  }, [negara, provinsi, kotaId, kecId, kelId]);

  return (
    <>
      <Text style={styles.labelText}>Negara*</Text>
      <Picker
        selectedValue={negara}
        onValueChange={selectNegara}
        style={styles.pickerStyle}
      >
        <Picker.Item label="Indonesia" value="indonesia" />
        <Picker.Item label="other" value="other" />
      </Picker>
      {negara !== "indonesia" && (
        <TextInput
          keyboardType="default"
          inputMode="text"
          style={styles.inputStyle}
          placeholder="input your country name Ex: Malaysia"
          placeholderTextColor="#999"
          onEndEditing={manualSelectNegara}
        />
      )}
      <Text style={styles.labelText}>Alamat*</Text>
      <TextInput
        keyboardType="default"
        inputMode="text"
        placeholder="contoh: jln. gatot subroto"
        placeholderTextColor="#999"
        style={styles.inputStyle}
        onEndEditing={insertJalan}
      />
      <Text style={styles.labelText}>Provinsi*</Text>
      <Picker
        selectedValue={kotaId}
        onValueChange={selectProvinsi}
        style={styles.pickerStyle}
      >
        {negara !== "indonesia" ? (
          <TextInput
            keyboardType="default"
            inputMode="text"
            placeholder="contoh: province"
            placeholderTextColor="#999"
            style={styles.inputStyle}
            onEndEditing={foreignSelectProvinsi}
          />
        ) : (
          provinsiFetch.map(({ id, name }) => (
            <Picker.Item label={name} value={id} key={name} />
          ))
        )}
      </Picker>
      <Text style={styles.labelText}>Kota*</Text>
      <Picker
        selectedValue={kecId}
        onValueChange={selectKota}
        style={styles.pickerStyle}
      >
        {negara !== "indonesia" ? (
          <TextInput
            keyboardType="default"
            inputMode="text"
            placeholder="exp: city"
            placeholderTextColor="#999"
            style={styles.inputStyle}
            onEndEditing={foreignSelectKota}
          />
        ) : (
          kotaFetch.map(({ id, name }) => (
            <Picker.Item label={name} value={id} key={name} />
          ))
        )}
      </Picker>
      <Text style={styles.labelText}>Kecamatan*</Text>
      <Picker
        selectedValue={kelId}
        onValueChange={selectKec}
        style={styles.pickerStyle}
      >
        {negara !== "indonesia" ? (
          <TextInput
            keyboardType="default"
            inputMode="text"
            placeholder="exp: kec"
            placeholderTextColor="#999"
            style={styles.inputStyle}
            onEndEditing={foreignSelectKec}
          />
        ) : (
          kecFetch.map(({ id, name }) => (
            <Picker.Item label={name} value={id} key={name} />
          ))
        )}
      </Picker>
      <Text style={styles.labelText}>Kelurahan*</Text>
      <Picker
        selectedValue={vilId}
        onValueChange={selectKel}
        style={styles.pickerStyle}
      >
        {negara !== "indonesia" ? (
          <TextInput
            keyboardType="default"
            inputMode="text"
            placeholder="exp: kel"
            placeholderTextColor="#999"
            style={styles.inputStyle}
            onEndEditing={foreignSelectKel}
          />
        ) : (
          kelFetch.map(({ id, name }) => (
            <Picker.Item label={name} value={id} key={name} />
          ))
        )}
      </Picker>
      <Text style={styles.labelText}>Kode Pos*</Text>
      <TextInput
        keyboardType="numeric"
        inputMode="numeric"
        maxLength={5}
        placeholder="masukkan kode pos"
        placeholderTextColor="#999"
        style={styles.inputStyle}
        onEndEditing={insertKodepos}
      />
    </>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    textAlign: "left",
    width: "100%",
  },
  inputStyle: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: "#bbb",
    borderWidth: 2,
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

export default RegisterPlace;
