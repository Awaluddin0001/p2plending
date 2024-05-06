import { FontAwesome } from "@expo/vector-icons";
import { format } from "date-fns";
import Checkbox from "expo-checkbox";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
  Modal,
} from "react-native";

import InputPin from "@/components/util/InputPin";
import ModalContainerLender from "@/components/util/ModalContainerLender";
import ModalSyaratDoeku from "@/components/util/ModalSyaratDoeku";
import MyButton from "@/components/util/myButton";
import toRupiah from "@/components/util/toRupiah";
import UserImage from "@/components/util/userImage";
import { color } from "@/constants/Colors";
// import { useMyContext } from "../../../../../src/components/util/LoginContext";
// import { getEB, postEB } from "../../../../../src/components/util/EventBus";

export default function Detail() {
  const router = useRouter();
  //   const contextData = useMyContext();
  const params = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [listBorrower, setListborrower] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isDoekuchecked, setIsdoekuchecked] = useState(false);
  const [modalVisible, setModalvisible] = useState(false);
  const [modalDoeku, setModalDoeku] = useState(false);
  const [modalPin, setModalpin] = useState(false);
  const [sign, setSign] = useState();
  const [docOther, setDocOther] = useState();
  const [reqdate, setReqDate] = useState();
  const [lDatesign, setLdatesign] = useState();
  const [tglCom, setTglcom] = useState();
  const [balance, setBalance] = useState();
  const [ciuAsuransi, setCiuasuransi] = useState(false);
  const [myAsuransi, setMyasuransi] = useState();

  const redirectJwt = async () => {
    const jwt = await SecureStore.getItemAsync("jwt");
    if (!jwt) {
      router.replace("/");
    }
  };

  //   useEffect(() => {
  //     redirectJwt();
  //     // Create a DateTime object with UTC+8 offset (Asia/Singapore)
  //     const dt = DateTime.now().setZone("Asia/Singapore");

  //     const compDate = dt.toFormat("dd-MM-yyyy hh:mm:ss");
  //     setTglcom(compDate);

  //     // Format as "yyyymmdd"
  //     const yyyymmdd = dt.toFormat("yyyyMMdd");
  //     setLdatesign(yyyymmdd);
  //   }, []);

  //   useEffect(() => {
  //     const fetchDanatersalurkan = async () => {
  //       try {
  //         if (contextData.id_ul) {
  //           const body = {
  //             id_ul: contextData.id_ul,
  //           };
  //           const myBalance = await getEB(
  //             body,
  //             "/api/eventbus/mybalance",
  //             setLoading
  //           );
  //           setBalance(myBalance.balance);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchDanatersalurkan();
  //   }, [contextData]);

  //   useEffect(() => {
  //     const takeborrowerlending = async () => {
  //       if (params?.id_trb) {
  //         const body = {};
  //         const borrower = await getEB(
  //           body,
  //           `/api/eventbus/ceklending?id_trb=${params.id_trb}`,
  //           setLoading
  //         );
  //         setListborrower(borrower);
  //       }
  //     };
  //     takeborrowerlending();
  //   }, [params]);

  //   useEffect(() => {
  //     if (listBorrower.requestdate) {
  //       const inputDate = new Date(listBorrower.requestdate);
  //       const formattedDate = format(inputDate, "MM-dd-yyyy");
  //       listBorrower.formattedDate = formattedDate;
  //       setReqDate(formattedDate);
  //       // console.log(listBorrower);
  //     }
  //   }, [listBorrower]);

  //   const verifyPinjam = async () => {
  //     const body = {
  //       id_trb: params?.id_trb,
  //       context: contextData,
  //       dateaggrement: lDatesign,
  //       asuransi: myAsuransi,
  //       tenor: listBorrower.tenor,
  //     };

  //     const result = await postEB(
  //       body,
  //       "/api/eventbus/acceptlending",
  //       setLoading
  //     );

  //     console.log(result);
  //     if (result.message == "success") {
  //       Alert.alert(
  //         "Selamat Pengajuan Anda berhasil",
  //         "Tim kami akan memproses pencairan dana ke penerima dana"
  //       );
  //       router.replace(`/`);
  //       setLoading(false);
  //     }
  //   };
  const setCheckedHandler = () => {
    setModalvisible(true);
  };

  //   const asuransiHandle = () => {
  //     setCiuasuransi((is) => !is);
  //     if (!ciuAsuransi) {
  //       setMyasuransi(listBorrower.amountdebt * 0.01);
  //     } else {
  //       setMyasuransi(0);
  //     }
  //   };

  return (
    <View style={styles.wraperSendOtp}>
      <View style={styles.headDashboard}>
        {/* <View style={styles.userInfoDashboard}>
          <UserImage foto={contextData.foto} gender={contextData.gender} />
          <View>
            <Text style={styles.usernameDashboard}>{contextData.name}</Text>
            <Text style={styles.userusahaDashboard}>
              {contextData.business}
            </Text>
          </View>
        </View> */}

        <FontAwesome name="bell" size={24} color="white" />
      </View>
      <ScrollView style={styles.scrollviewSect}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.cardList}>
            <Text>Jumlah Dana Anda</Text>
            <Text style={styles.textExtraBold}>
              {balance
                ? toRupiah(balance, {
                    useUnit: true,
                    floatingPoint: 0,
                    spaceBeforeUnit: true,
                  })
                : toRupiah(0, {
                    useUnit: true,
                    floatingPoint: 0,
                    spaceBeforeUnit: true,
                  })}
            </Text>
          </View>
          {/* <View style={styles.cardListDetail}>
            {listBorrower.foto ? (
              <Image
                source={{
                  uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/${listBorrower.foto}`,
                }}
                style={styles.fotoDashboard}
              />
            ) : listBorrower.gender == "pria" ? (
              <Image
                source={{
                  uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/pria.png`,
                }}
                style={styles.fotoDashboard}
              />
            ) : listBorrower.gender == "perempuan" ? (
              <Image
                source={{
                  uri: `${process.env.EXPO_PUBLIC_SERVICE_J1}/account/default/perempuan.png`,
                }}
                style={styles.fotoDashboard}
              />
            ) : (
              <ActivityIndicator size="large" color={color.primary} />
            )}
            <View>
              <Text style={styles.nameDashboard}>Nama</Text>
              <Text style={styles.usahaDashboard}>{listBorrower.name}</Text>
            </View>
          </View> */}
          <View style={styles.cardListDetail}>
            {/* <View>
              <Text style={styles.nameDashboard}>Alamat</Text>
              <Text style={styles.usahaDashboard}>{listBorrower.address}</Text>
            </View> */}
          </View>
          <View style={styles.cardListDetail}>
            <View>
              <Text style={styles.nameDashboard}>Tujuan Penggunaan Dana</Text>
              {/* <Text style={styles.usahaDashboard}>{listBorrower.goal}</Text> */}
            </View>
          </View>
          <View style={styles.cardListDetail}>
            <View>
              <Text style={styles.nameDashboard}>Manfaat Pendanaan</Text>
              <Text style={styles.usahaDashboard}>
                {/* {listBorrower.amountuse} */}
              </Text>
            </View>
          </View>
          <View style={styles.cardListDetail}>
            <View>
              <Text style={styles.nameDashboard}>Gender</Text>
              {/* <Text style={styles.usahaDashboard}>{listBorrower.gender}</Text> */}
            </View>
            <View>
              <Text style={styles.nameDashboard}>NIK</Text>
              {/* <Text style={styles.usahaDashboard}>{listBorrower.nik}</Text> */}
            </View>
          </View>
          <View style={styles.cardListDetail}>
            <View>
              <Text style={styles.nameDashboard}>Phone number</Text>
              {/* <Text style={styles.usahaDashboard}>0{listBorrower.phone}</Text> */}
            </View>

            <View>
              <Text style={styles.nameDashboard}>Tanggal Permintaan</Text>
              <Text style={styles.usahaDashboard}>{reqdate}</Text>
            </View>
          </View>
          {/* <View style={styles.cardListDetail}>
            <View>
              <Text style={styles.nameDashboard}>Permintaan Dana</Text>
              <Text style={styles.usahaDashboard}>
                {listBorrower.amountdebt &&
                  toRupiah(listBorrower.amountdebt, {
                    floatingPoint: 0,
                  })}
              </Text>
            </View>
            <View>
              <Text style={styles.nameDashboard}>Tenor</Text>
              <Text style={styles.usahaDashboard}>
                {listBorrower.tenor} Hari
              </Text>
            </View>
          </View> */}
          <View style={styles.cardListDetail}>
            {/* <View>
              <Text style={styles.nameDashboard}>Score</Text>
              <Text style={styles.usahaDashboard}>
                {listBorrower.scorenumber}
              </Text>
            </View> */}

            {/* <View>
              <Text style={styles.nameDashboard}>Grade</Text>
              <Text style={styles.usahaDashboard}>
                {listBorrower.scorealphabet}
              </Text>
            </View> */}
          </View>
          <View style={styles.cardList}>
            <Text style={styles.nameDashboard}>Total Dana Yang Dikirim</Text>
            {/* <Text
              style={{
                ...styles.usahaDashboard,
                color: ciuAsuransi ? "blue" : "#000",
                fontWeight: ciuAsuransi ? "bold" : "normal",
              }}
            >
              {ciuAsuransi
                ? toRupiah(myAsuransi + listBorrower.amountdebt, {
                    floatingPoint: 0,
                  })
                : listBorrower.amountdebt &&
                  toRupiah(listBorrower.amountdebt, {
                    floatingPoint: 0,
                  })}
            </Text> */}
          </View>
          <View style={styles.cardList}>
            <View style={styles.wrapperCheckbox}>
              {/* <Checkbox value={ciuAsuransi} onValueChange={asuransiHandle} /> */}
              <View style={styles.textAgrement}>
                <Text style={{ fontSize: 12 }}>
                  Menggunakan Asuransi sebesar 1%
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                width: "100%",
                // textAlign: "right",
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
                  // setModalpin(true);
                  setIsChecked(true);
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
              {/* <ModalContainerLender
                id_trb={params?.id_trb}
                lender={contextData}
              /> */}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={modalDoeku}>
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
                  setModalDoeku(false);
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
                  setModalDoeku(false);
                  // setModalpin(true);
                  setIsdoekuchecked(true);
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
              {/* <ModalSyaratDoeku id_trb={params?.id_trb} lender={contextData} /> */}
            </ScrollView>
          </View>
        </View>
      </Modal>
      {/* <Modal animationType="slide" transparent={true} visible={modalPin}>
            <View style={styles.modalContainer}>
              <InputPin
                setIschecked={setIsChecked}
                id_ub={contextData.id_ub}
                setModalpin={setModalpin}
              />
            </View>
          </Modal> */}
      <View
        style={{
          marginBottom: 10,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.wrapperCheckbox}>
          <Checkbox value={isChecked} onValueChange={setCheckedHandler} />
          <View style={styles.textAgrement}>
            <Text style={{ fontSize: 12 }}>Saya menyetujui </Text>
            <Pressable>
              <Text
                style={{
                  color: "blue",
                  fontSize: 12,
                }}
              >
                syarat dan ketentuan dengan penerima dana
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.wrapperCheckbox}>
          <Checkbox
            value={isDoekuchecked}
            onValueChange={() => setModalDoeku(true)}
          />
          <View style={styles.textAgrement}>
            <Text style={{ fontSize: 12 }}>Saya menyetujui </Text>
            <Pressable>
              <Text
                style={{
                  color: "blue",
                  fontSize: 12,
                }}
              >
                syarat dan ketentuan dengan doeku
              </Text>
            </Pressable>
          </View>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color={color.primary} />
        ) : (
          <MyButton
            btnText="Pinjam"
            btnWidth="90%"
            btnType={isChecked && isDoekuchecked ? "primary" : "secondary"}
            // onPress={verifyPinjam}
            btnDisable={!isChecked && isDoekuchecked}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wraperSendOtp: {
    flex: 1,
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
    paddingTop: 60,
    height: "20%",
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
  fotoList: {
    borderRadius: 999,
    width: 40,
    height: 40,
  },
  usernameDashboard: {
    fontFamily: "InterMedium",
    fontSize: 16,
    color: "#fff",
  },
  userusahaDashboard: {
    fontFamily: "InterRegular",
    marginTop: 5,
    fontSize: 14,
    color: "#fff",
  },
  nameDashboard: {
    fontFamily: "InterMedium",
    fontSize: 16,
  },
  usahaDashboard: {
    fontFamily: "InterRegular",
    marginTop: 5,
    fontSize: 14,
  },
  scrollList: {
    height: "70%",
    flexDirection: "column",
    width: "100%",
    padding: 20,
  },
  cardList: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    marginVertical: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    gap: 5,
    width: "90%",
  },
  cardListDetail: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    marginVertical: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    width: "90%",
  },
  textExtraBold: {
    fontFamily: "InterBold",
    fontSize: 20,
  },
  textBold: {
    fontFamily: "InterSemiBold",
  },
  wrapperCheckbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  textAgrement: {
    flexDirection: "row",
  },
  scrollviewSect: {
    height: "60%",
    width: "100%",
    paddingBottom: 15,
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
});
