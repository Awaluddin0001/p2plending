import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import { useRouter, useFocusEffect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { DateTime } from "luxon";
import { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  ActivityIndicator,
  Modal,
  Pressable,
} from "react-native";

import InputPin from "@/components/util/InputPin";
import ModalContainer from "@/components/util/ModalContainer";
import MyButton from "@/components/util/myButton";
import toRupiah from "@/components/util/toRupiah";
import useApi from "@/components/util/useApi";
import UserImage from "@/components/util/userImage";
import { appDimension } from "@/constants/Sizes";
import { color } from "@/constants/Colors";

export default function Pinjam() {
  const router = useRouter();
  const [modalVisible, setModalvisible] = useState(false);
  const [modalPin, setModalpin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [selectedDays, setSelectedDays] = useState("61");
  const [selectedTujuan, setSelectedTujuan] = useState(
    "Peminjaman UMKM Davestpay"
  );
  const [selectedManfaat, setSelectedManfaat] = useState(
    "Penyaluran Dana Ke UMKM"
  );
  const [amountPinjaman, setAmountpinjaman] = useState(0);
  const [biayaLayanan, setBiayalayanan] = useState(0);
  const [bungaValue, setBungavalue] = useState(0.15);
  const [bunga, setBunga] = useState(0);
  const [angsuran1, setAngsuran1] = useState(0);
  const [angsuran2, setAngsuran2] = useState(0);
  const [angsuran3, setAngsuran3] = useState(0);
  const [hari, setHari] = useState<string>("");
  const [bulan, setBulan] = useState<string>("");
  const [tahun, setTahun] = useState<string>("");
  const [tglCom, setTglcom] = useState<string>("");
  const [bDatesign, setBdatesign] = useState<string>("");
  const [userData, setUserData] = useState<{
    token: string | null;
    name: string | null;
    business: string | null;
    id_ub: string | null;
    email: string | null;
    foto: string | null;
    phone: string | null;
    gender: string | null;
  }>({
    token: "",
    business: "",
    name: "",
    id_ub: "",
    email: "",
    foto: "",
    phone: "",
    gender: "",
  });

  const {
    loading: loadingApi1,
    resp: responseApi1,
    fetchData: fetchDataApi1,
  } = useApi<any>();

  const {
    loading: loadingApi2,
    resp: responseApi2,
    fetchData: fetchDataApi2,
  } = useApi<any>();

  const {
    loading: loadingApi3,
    resp: responseApi3,
    fetchData: fetchDataApi3,
  } = useApi<any>();

  const {
    loading: loadingApi4,
    resp: responseApi4,
    fetchData: fetchDataApi4,
  } = useApi<any>();

  const {
    loading: loadingApi5,
    resp: responseApi5,
    fetchData: fetchDataApi5,
  } = useApi<any>();

  useEffect(() => {
    const session = async () => {
      const email = await SecureStore.getItemAsync("email");
      const token = await SecureStore.getItemAsync("token");
      const business = await SecureStore.getItemAsync("business");
      const id_ub = await SecureStore.getItemAsync("id_ub");
      const name = await SecureStore.getItemAsync("name");
      const phone = await SecureStore.getItemAsync("phone");
      const gender = await SecureStore.getItemAsync("gender");
      const foto = await SecureStore.getItemAsync("foto");
      setUserData((fd) => {
        return {
          ...fd,
          token,
          business,
          name,
          id_ub,
          email,
          foto,
          phone,
          gender,
        };
      });
    };
    session();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const tabs = async () => {
        if (userData.id_ub) {
          checkSign();
          checkKtp();
          checkadrnik();
          // checkStatus();
        }
      };
      tabs();
    }, [userData])
  );

  const checkStatus = async () => {
    if (userData.id_ub) {
      await fetchDataApi5(
        "get",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_D1}`,
        "/checkstatus",
        undefined,
        {
          id_ub: userData.id_ub,
        }
      );
    }
  };

  useEffect(() => {
    redirectJwt();
    // Create a DateTime object with UTC+8 offset (Asia/Singapore)
    const dt = DateTime.now().setZone("Asia/Singapore");

    // Format as "dd-mm-yyyy"
    const dd = dt.toFormat("dd");
    const mm = dt.toFormat("MM");
    const yy = dt.toFormat("yy");
    setHari(dd);
    setBulan(mm);
    setTahun(yy);

    const compDate = dt.toFormat("dd-MM-yyyy hh:mm:ss");
    setTglcom(compDate);

    // Format as "yyyymmdd"
    const yyyymmdd = dt.toFormat("yyyyMMdd");
    setBdatesign(yyyymmdd);
  }, [userData]);

  useEffect(() => {
    setBiayalayanan(
      Number(selectedDays) === 61
        ? 0.1 * amountPinjaman * 1
        : Number(selectedDays) === 75
          ? 0.125 * amountPinjaman * 1
          : 0.15 * amountPinjaman * 1
    );
    setBunga(
      Math.ceil(amountPinjaman * Number(selectedDays) * bungaValue * 0.01)
    );
    setAngsuran1(
      Number(selectedDays) === 61
        ? Math.ceil(amountPinjaman / 2) + Math.ceil(bunga / 2)
        : Math.ceil(amountPinjaman / 3) + Math.ceil(bunga / 3)
    );
    setAngsuran2(
      Number(selectedDays) === 61
        ? Math.ceil(amountPinjaman / 2) + Math.ceil(bunga / 2)
        : Math.ceil(amountPinjaman / 3) + Math.ceil(bunga / 3)
    );
    setAngsuran3(
      Number(selectedDays) === 61
        ? 0
        : Math.ceil(amountPinjaman / 3) + Math.ceil(bunga / 3)
    );
  }, [amountPinjaman, selectedDays, bunga]);

  const redirectJwt = async () => {
    const token = await SecureStore.getItemAsync("token");
    if (!token) {
      router.replace("/");
    }
  };

  const checkSign = async () => {
    if (userData.id_ub) {
      // const headers = {
      //   Authorization: `Bearer ${userData.token}`,
      // };
      // console.log("yes");
      await fetchDataApi1(
        "get",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_A1}`,
        "/mysign",
        undefined,
        {
          id_ub: userData.id_ub,
        }
      );
    }
  };

  const checkKtp = async () => {
    if (userData.id_ub) {
      const body = {
        id_ub: userData.id_ub,
      };
      await fetchDataApi2(
        "get",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_A1}`,
        "/myktp",
        undefined,
        body
      );
    }
  };

  const checkadrnik = async () => {
    if (userData.id_ub) {
      const body = {
        id_ub: userData.id_ub,
      };
      await fetchDataApi3(
        "get",
        `${process.env.EXPO_PUBLIC_BASE_URL}`,
        `${process.env.EXPO_PUBLIC_SERVICE_A1}`,
        "/adrnik",
        undefined,
        body
      );
    }
  };

  const verifyPinjam = async () => {
    const body = {
      amount: amountPinjaman,
      bdatesign: bDatesign,
      angsuran1,
      angsuran2,
      angsuran3,
      tenor: selectedDays,
      bunga,
      biayaLayanan,
      id_ub: userData.id_ub,
      address: responseApi3?.data.address,
      nik: responseApi3?.data.nik,
      phone: userData.phone,
      email: userData.email,
      name: userData.name,
      sign: responseApi1.data.sign,
      goal: selectedTujuan,
      amountuse: selectedManfaat,
    };
    await fetchDataApi4(
      "post",
      `${process.env.EXPO_PUBLIC_BASE_URL}`,
      `${process.env.EXPO_PUBLIC_SERVICE_I1}`,
      "/newlending",
      body
    );
    console.log(responseApi4);
    if (responseApi4.document === 200 && responseApi4.saverow === "success") {
      Alert.alert(
        "Selamat Pengajuan Anda berhasil",
        "Tim kami akan memverifikasi data anda"
      );
      router.replace(`/`);
    }
  };

  const pickerDays = (val: any) => {
    setSelectedDays(val);
    setBungavalue(val === 61 ? 0.15 : val === 75 ? 0.13 : 0.1);
  };
  const pickTujuan = (val: any) => {
    setSelectedTujuan(val);
  };
  const pickManfaat = (val: any) => {
    setSelectedManfaat(val);
  };

  const setCheckedHandler = () => {
    if (!responseApi1.data.sign) {
      Alert.alert(
        "Anda Belum Punya Tanda Tangan",
        "Silahkan tanda tangan terlebih dahulu sebelum melakukan pengajuan pinjaman, tanda tangan diperlukan untuk perjanjian dokumen, apa anda setuju ?",
        [
          { text: "cancel" },
          {
            text: "setuju",
            onPress: () => {
              router.push(`/${userData.id_ub}/tandaTangan`);
            },
          },
        ]
      );
      setIsChecked(false);
      return;
    } else {
      if (!responseApi2?.data.ktp || !responseApi2?.data.selfie) {
        Alert.alert(
          "Belum melakukan scan wajah dan ktp",
          "Saat pertama kali melakukan pengajuan pinjaman, kami perlu memverifikasi wajah dan ktp anda, apa anda setuju ?",
          [
            { text: "cancel" },
            {
              text: "setuju",
              onPress: () => {
                router.push(`/${userData.id_ub}/ktpVerif`);
              },
            },
          ]
        );
        setIsChecked(false);
        return;
      }
    }
    if (amountPinjaman < 500000) {
      Alert.alert(
        "Isi Jumlah Dana",
        "Anda belum memasukkan jumlah dana yang ingin anda pinjam"
      );
      return;
    }
    if (isChecked) {
      setIsChecked(false);
      return;
    }
    // setIsChecked(!isChecked);
    setModalvisible(true);
  };

  const amountWhenDone = ({
    nativeEvent,
  }: {
    nativeEvent: { text: string };
  }) => {
    const val: string = nativeEvent.text;
    if (Number(val) < 500000) {
      setAmountpinjaman(0);
      Alert.alert(
        "Jumlah Pinjaman kurang dari batas minimal",
        "atur ulang input anda, minimal pinjaman dana adalah 500.000"
      );
      return;
    }
    if (Number(val) > 30000000) {
      setAmountpinjaman(0);
      Alert.alert(
        "Jumlah Pinjaman melebihi batas maximal",
        "atur ulang input anda, maximal pinjaman dana adalah 3.000.000"
      );
      return;
    }
    setAmountpinjaman(Number(val));
  };

  return (
    <View style={styles.wraperSendOtp}>
      {loadingApi1 ||
        loadingApi2 ||
        loadingApi3 ||
        loadingApi4 ||
        (loadingApi5 ? (
          <ActivityIndicator size="large" color={color.primary} />
        ) : responseApi5 &&
          responseApi5.length > 0 &&
          responseApi5.some((val: any) => val.status === "menunggu") ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Text>Anda Sudah Melakukan permintaan</Text>
          </View>
        ) : (
          <>
            <View style={styles.headDashboard}>
              <View style={styles.userInfoDashboard}>
                <UserImage foto={userData.foto} gender={userData.gender} />
                <View>
                  <Text style={styles.nameDashboard}>{userData.name}</Text>
                  <Text style={styles.usahaDashboard}>{userData.business}</Text>
                </View>
              </View>
              <FontAwesome name="bell" size={24} color="white" />
            </View>
            <View style={styles.inputBody}>
              <View style={styles.inputSection}>
                <View style={styles.jumlahDanaInput}>
                  <Text style={styles.jumlahDanaText}>
                    Jumlah Dana :{" "}
                    {amountPinjaman
                      ? toRupiah(amountPinjaman, { formal: false })
                      : toRupiah(0, { formal: false })}
                  </Text>
                  <TextInput
                    keyboardType="numeric"
                    inputMode="numeric"
                    placeholder="input jumlah pinjaman"
                    placeholderTextColor={color.primary}
                    onEndEditing={amountWhenDone}
                    style={styles.inputAmount}
                  />
                </View>
                <View style={styles.durasiPinjamanInput}>
                  <Text>Durasi Pinjaman</Text>
                  <Picker
                    selectedValue={selectedDays}
                    onValueChange={pickerDays}
                  >
                    <Picker.Item label="61 Hari" value="61" />
                    <Picker.Item label="75 Hari" value="75" />
                    <Picker.Item label="90 Hari" value="90" />
                  </Picker>
                </View>
              </View>
            </View>
            <Text
              style={{
                fontFamily: "InterMedium",
                alignSelf: "flex-start",
                marginLeft: 20,
                marginBottom: 10,
              }}
            >
              Summary :
            </Text>
            <ScrollView style={styles.scrollviewSect}>
              <View style={styles.bungaDanLayanan}>
                <View style={styles.cardAmount}>
                  <Text>
                    Bunga Total ({selectedDays} hari x {bungaValue}%)
                  </Text>
                  <Text style={styles.amountText}>
                    {toRupiah(bunga, { formal: false })}
                  </Text>
                </View>
                <View style={styles.cardAmount}>
                  <Text>Biaya Layanan</Text>
                  <Text style={styles.amountText}>
                    {toRupiah(biayaLayanan, { formal: false })}
                  </Text>
                </View>
              </View>
              <View style={styles.angsuranDetails}>
                {Number(selectedDays) === 61 ? (
                  <>
                    <View style={styles.cardAmount}>
                      <Text>Angsuran 1 + Bunga</Text>
                      <Text style={styles.amountText}>
                        {toRupiah(angsuran1, { formal: false })}
                      </Text>
                    </View>
                    <View style={styles.cardAmount}>
                      <Text>Angsuran 2 + Bunga</Text>
                      <Text style={styles.amountText}>
                        {toRupiah(angsuran2, { formal: false })}
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.cardAmount}>
                      <Text>Angsuran 1 + Bunga</Text>
                      <Text style={styles.amountText}>
                        {toRupiah(angsuran1, { formal: false })}
                      </Text>
                    </View>
                    <View style={styles.cardAmount}>
                      <Text>Angsuran 2 + Bunga</Text>
                      <Text style={styles.amountText}>
                        {toRupiah(angsuran2, { formal: false })}
                      </Text>
                    </View>
                    <View style={styles.cardAmount}>
                      <Text>Angsuran 3 + Bunga</Text>
                      <Text style={styles.amountText}>
                        {toRupiah(angsuran3, { formal: false })}
                      </Text>
                    </View>
                  </>
                )}
              </View>
              <View style={styles.dateLine}>
                <View style={styles.cardAmount}>
                  <Text>Jumlah Yang Diterima</Text>
                  <Text style={styles.amountText}>
                    {toRupiah(amountPinjaman - biayaLayanan, { formal: false })}
                  </Text>
                </View>
                <View style={styles.cardAmount}>
                  <Text>Jatuh Tempo</Text>
                  <Text style={styles.amountText}>
                    {selectedDays} Hari setelah di setujui
                  </Text>
                </View>
              </View>
              <View style={styles.manfaatInput}>
                <View style={styles.manfaatPinjamanInput}>
                  <Text>Tujuan Penggunaan Dana</Text>
                  <Picker
                    selectedValue={selectedTujuan}
                    onValueChange={pickTujuan}
                  >
                    <Picker.Item
                      label="Peminjaman UMKM Davestpay"
                      value="Peminjaman UMKM Davestpay"
                    />
                  </Picker>
                </View>
              </View>
              <View style={{ ...styles.manfaatInput, marginBottom: 60 }}>
                <View style={styles.manfaatPinjamanInput}>
                  <Text>Manfaat Pendanaan</Text>
                  <Picker
                    selectedValue={selectedManfaat}
                    onValueChange={pickManfaat}
                  >
                    <Picker.Item
                      label="Penyaluran Dana Ke UMKM"
                      value="Penyaluran Dana Ke UMKM"
                    />
                  </Picker>
                </View>
              </View>
            </ScrollView>
            <Modal animationType="slide" visible={modalVisible}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "flex-end",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        setModalvisible(false);
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "InterBold",
                          color: color.secondary,
                          fontSize: 16,
                        }}
                      >
                        Tidak Setuju
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        setModalvisible(false);
                        setModalpin(true);
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "InterBold",
                          color: color.primary,
                          fontSize: 16,
                        }}
                      >
                        Setuju
                      </Text>
                    </Pressable>
                  </View>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{ width: "95%", paddingTop: 15 }}
                  >
                    <ModalContainer
                      sign={responseApi1?.data.sign}
                      hari={hari}
                      bulan={bulan}
                      tahun={tahun}
                      cd={userData}
                      amount={amountPinjaman}
                      angsuran1={angsuran1}
                      angsuran2={angsuran2}
                      angsuran3={angsuran3}
                      tenor={selectedDays}
                      bunga={bunga}
                      adrnik={responseApi3}
                    />
                  </ScrollView>
                </View>
              </View>
            </Modal>
            <Modal animationType="slide" visible={modalPin}>
              <View style={styles.modalContainer}>
                <InputPin
                  setIschecked={setIsChecked}
                  id_ub={userData.id_ub as string}
                  setModalpin={setModalpin}
                />
              </View>
            </Modal>
            <View
              style={{
                marginBottom: 10,
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.wrapperCheckbox}>
                <Checkbox value={isChecked} onValueChange={setCheckedHandler} />
                <View style={styles.textAgrement}>
                  <Text style={{ fontSize: 11 }}>Saya menyetujui </Text>
                  <Pressable>
                    <Text
                      style={{
                        color: "blue",
                        fontSize: 11,
                      }}
                    >
                      syarat dan ketentuan dengan pemberi dana
                    </Text>
                  </Pressable>
                </View>
              </View>
              {loadingApi4 ? (
                <ActivityIndicator size="large" color={color.primary} />
              ) : (
                <MyButton
                  btnText="Pinjam"
                  btnWidth="90%"
                  btnType={isChecked ? "primary" : "secondary"}
                  onPress={verifyPinjam}
                  btnDisable={!isChecked}
                />
              )}
            </View>
          </>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSendOtp: {
    height: appDimension.heightScreen - 120,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  headDashboard: {
    backgroundColor: color.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop:
      appDimension.heightScreen < 960 ? appDimension.heightScreen * 0.05 : 20,
  },
  userInfoDashboard: {
    flex: 1,
    gap: 10,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  fotoDashboard: {
    borderRadius: 999,
    width: 60,
    height: 60,
  },
  nameDashboard: {
    fontFamily: "InterMedium",
    fontSize: 16,
    color: "#fff",
  },
  usahaDashboard: {
    fontFamily: "InterLight",
    color: "#fff",
    marginTop: 5,
  },
  textAgrement: {
    flexDirection: "row",
  },
  inputBody: {
    width: "100%",
    padding: 20,
    height:
      appDimension.heightScreen < 960 ? appDimension.heightScreen * 0.2 : 20,
  },
  inputSection: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  jumlahDanaText: {
    marginBottom: 10,
  },
  jumlahDanaInput: {
    width: "50%",
    height: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  durasiPinjamanInput: {
    width: "50%",
    height: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  inputAmount: {
    borderColor: color.primary,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  danaHead: {
    fontFamily: "InterRegular",
    fontSize: 10,
  },
  danaValueHead: {
    fontFamily: "InterSemiBold",
    marginTop: 10,
    fontSize: 12,
  },
  cardAmount: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    height: 100,
    width: "45%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  amountText: {
    fontFamily: "InterSemiBold",
    marginTop: 10,
    fontSize: 18,
  },
  scrollviewSect: {
    flexGrow: 1,
    height: appDimension.heightScreen * 0.15,
    width: "100%",
    paddingBottom: 20,
  },
  bungaDanLayanan: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  angsuranDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 15,
    flexWrap: "wrap",
  },
  dateLine: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  wrapperCheckbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    padding: 20,
  },
  modalContent: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    fontFamily: "InterBold",
    gap: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  manfaatInput: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: appDimension.heightScreen < 960 ? 120 : 100,
  },
  manfaatPinjamanInput: {
    width: "100%",
    height: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
