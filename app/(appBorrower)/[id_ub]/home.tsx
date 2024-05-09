import { FontAwesome } from "@expo/vector-icons";
import { useRouter, useFocusEffect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import MyButton from "@/components/util/myButton";
import toRupiah from "@/components/util/toRupiah";
import UserImage from "@/components/util/userImage";
import useApi from "@/components/util/useApi";
import { color } from "@/constants/Colors";
import { appDimension } from "@/constants/Sizes";

export default function Home() {
  const router = useRouter();
  //   const contextData = useMyContext();
  const [totalPinjaman, setTotalpinjaman] = useState("0");
  const [balance, setBalance] = useState("0");
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
  const [data, setdata] = useState<{
    data: [
      {
        id_trb?: string | undefined;
        amountdebt?: string | number | undefined;
        tenor?: string | undefined;
        requestdate?: string | undefined;
        status?: string | undefined;
      },
    ];
  }>({
    data: [{}],
  });
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const session = async () => {
        const email = await SecureStore.getItemAsync("email");
        const token = await SecureStore.getItemAsync("token");
        const business = await SecureStore.getItemAsync("business");
        const id_ub = await SecureStore.getItemAsync("id_ub");
        const name = await SecureStore.getItemAsync("name");
        const phone = await SecureStore.getItemAsync("phone");
        const gender = await SecureStore.getItemAsync("gender");
        const foto = await SecureStore.getItemAsync("foto");
        setUserData({
          token,
          business,
          name,
          id_ub,
          email,
          foto,
          phone,
          gender,
        });
      };
      session();
    }, [])
  );

  const ajukanPinjaman = () => {
    router.push(`/${userData.id_ub}/pinjam`);
  };
  const bayarAngsuran = () => {
    router.push(`/${userData.id_ub}/bayar`);
  };

  // const loadRequestLending = () => {
  //   const body = {
  //     id_ub: contextData.id_ub,
  //   };
  //   getApiLrs(body, "/api/lendingrequest/myreqborrower", setData, setLoading);
  // };

  //   useEffect(() => {
  //     const fetchDanatersalurkan = async () => {
  //       try {
  //         if (contextData.id_ul) {
  //           const body = {
  //             id_ul: contextData.id_ul,
  //           };
  //           const totalAmount = await getReApiLrs(
  //             body,
  //             "/api/lendingrequest/countlendergive",
  //             setLoading
  //           );
  //           const myBorrower = await getReApiLrs(
  //             body,
  //             "/api/lendingrequest/myreqlender",
  //             setLoading
  //           );
  //           const myBalance = await getEB(
  //             body,
  //             "/api/eventbus/mybalance",
  //             setLoading
  //           );

  //           setTotalpinjaman(totalAmount.data);
  //           setListborrower(myBorrower.data);
  //           setBalance(myBalance.balance);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchDanatersalurkan();
  //   }, [contextData]);

  return (
    <>
      <View style={styles.wraperSendOtp}>
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
        <View style={styles.pinjamansDashboard}>
          <View>
            <Text style={styles.danaHead}>Pinjaman</Text>
            <Text style={styles.danaValueHead}>
              {loading ? (
                <ActivityIndicator size="large" color={color.primary} />
              ) : data?.data[0].amountdebt ? (
                toRupiah(
                  data?.data?.reduce(function (acc, val) {
                    return acc + Number(val.amountdebt);
                  }, 0)
                )
              ) : (
                toRupiah(0)
              )}
            </Text>
          </View>
          <View>
            <Text style={styles.danaHead}>Angsuran</Text>
            <Text style={styles.danaValueHead}>
              {" "}
              {loading ? (
                <ActivityIndicator size="large" color={color.primary} />
              ) : data?.data[0].tenor ? (
                toRupiah(
                  data.data[0].tenor === "61"
                    ? (Number(data.data[0].amountdebt) * 61 * 0.0015) / 2 +
                        Number(data.data[0].amountdebt) / 2
                    : data.data[0].tenor === "75"
                      ? (Number(data.data[0].amountdebt) * 75 * 0.0013) / 3 +
                        Number(data.data[0].amountdebt) / 3
                      : (Number(data.data[0].amountdebt) * 90 * 0.001) / 3 +
                        Number(data.data[0].amountdebt) / 3
                )
              ) : (
                toRupiah(0)
              )}
            </Text>
          </View>
          <View>
            <Text style={styles.danaHead}>Jatuh Tempo</Text>
            <Text style={styles.danaValueHead}>
              {" "}
              {loading ? (
                <ActivityIndicator size="large" color={color.primary} />
              ) : data.data[0].requestdate ? (
                (() => {
                  if (data.data[0].requestdate) {
                    // Create a Date object from the input date string
                    const inputDate = new Date(data.data[0].requestdate);

                    // Add 61 days to the date
                    inputDate.setDate(inputDate.getDate() + 61);

                    // Get the day, month, and year components
                    const day = inputDate.getDate().toString().padStart(2, "0");
                    const month = (inputDate.getMonth() + 1)
                      .toString()
                      .padStart(2, "0"); // Note: Month is zero-indexed, so we add 1.
                    const year = inputDate.getFullYear();

                    // Format the date as "dd-mm-yyyy"
                    const formattedDate = `${day}-${month}-${year}`;
                    return formattedDate;
                  }
                })()
              ) : (
                "-"
              )}
            </Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <MyButton
            btnText="Ajukan Pinjaman"
            btnType="secondary"
            btnWidth="auto"
            onPress={ajukanPinjaman}
            key="1"
          />
          <MyButton
            btnText="Bayar Angsuran"
            btnType="primary"
            btnWidth="auto"
            key="2"
            onPress={bayarAngsuran}
          />
        </View>
        <Text style={styles.infoDashboard}>Info</Text>
        <ScrollView style={styles.listAngsuran}>
          {loading ? (
            <ActivityIndicator size="large" color={color.primary} />
          ) : data?.data[0].id_trb ? (
            data?.data?.map((val) => (
              <View style={styles.cardAmount} key={val.id_trb}>
                <View>
                  <Text>Lending Id</Text>
                  <Text style={styles.amountText}>{val.id_trb}</Text>
                </View>
                <View>
                  <Text>Jumlah Pinjaman</Text>
                  <Text style={styles.amountText}>
                    {toRupiah(val.amountdebt ? val.amountdebt : "0")}
                  </Text>
                </View>
                <View>
                  <Text>Status</Text>
                  <Text style={styles.amountText}>{val.status}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text>Anda Belum Punya Angsuran</Text>
          )}
        </ScrollView>
      </View>
    </>
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
    paddingTop: 40,
  },
  userInfoDashboard: {
    flex: 1,
    gap: 10,
    alignItems: "flex-start",
    flexDirection: "row",
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
  pinjamansDashboard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: appDimension.heightScreen < 960 ? -10 : -32,
    padding: 20,
    flexDirection: "row",
    gap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 25,
    marginVertical: 20,
  },
  infoDashboard: {
    fontFamily: "InterSemiBold",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  listAngsuran: {
    paddingHorizontal: 20,
    width: "100%",
    height: appDimension.heightScreen * 0.3,
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
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 16,
    gap: 16,
    flexDirection: "row",
  },
  amountText: {
    fontFamily: "InterSemiBold",
    marginTop: 10,
    fontSize: 12,
  },
});
