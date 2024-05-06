import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import MyButton from "@/components/util/myButton";
import toRupiah from "@/components/util/toRupiah";
import UserImage from "@/components/util/userImage";
import { color } from "@/constants/Colors";
// import { useMyContext } from "../../../../src/components/util/LoginContext";
// import { getReApiLrs } from "../../../../src/components/util/LenderService";
// import { getEB } from "../../../../src/components/util/EventBus";

export default function Home() {
  const router = useRouter();
  //   const contextData = useMyContext();
  const [totalPinjaman, setTotalpinjaman] = useState();
  const [balance, setBalance] = useState();
  const [listBorrower, setListborrower] = useState();
  const [loading, setLoading] = useState(false);

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

  //   const beriPinjaman = () => {
  //     router.push(
  //       `${process.env.EXPO_PUBLIC_ROUTE_LENDER_DASH}/${id_ul}/permintaan`
  //     );
  //   };

  return (
    <View style={styles.wraperSendOtp}>
      <View style={styles.headDashboard}>
        {/* <View style={styles.userInfoDashboard}>
          <UserImage foto={contextData.foto} gender={contextData.gender} />
          <View>
            <Text style={styles.nameDashboard}>{contextData.name}</Text>
            <Text style={styles.usahaDashboard}>{contextData.business}</Text>
          </View>
        </View> */}
        <FontAwesome name="bell" size={24} color="white" />
      </View>
      <View style={styles.pinjamansDashboard}>
        <View>
          <Text style={styles.danaHead}>Jumlah Dana</Text>
          <Text style={styles.danaValueHead}>
            {balance &&
              toRupiah(balance, {
                useUnit: true,
                floatingPoint: 0,
                spaceBeforeUnit: true,
              })}
          </Text>
        </View>
        <View>
          <Text style={styles.danaHead}>Dana tersalurkan</Text>
          <Text style={styles.danaValueHead}>
            {totalPinjaman &&
              toRupiah(totalPinjaman, {
                useUnit: true,
                floatingPoint: 0,
                spaceBeforeUnit: true,
              })}
          </Text>
        </View>
        <View>
          <Text style={styles.danaHead}>Jumlah Peminjam Aktif</Text>
          <Text style={styles.danaValueHead}>0</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <MyButton
          btnText="Beri Pinjaman"
          btnType="secondary"
          btnWidth="90%"
          //   onPress={beriPinjaman}
          key="1"
        />
      </View>
      <Text style={styles.infoDashboard}>History</Text>
      {/* <ScrollView style={styles.listAngsuran}>
        {loading ? (
          <ActivityIndicator size="large" color={color.primary} />
        ) : listBorrower?.length > 0 ? (
          listBorrower?.map((val) => (
            <View style={styles.cardAmount} key={val.id_trb}>
              <View>
                <Text>Lending Id</Text>
                <Text style={styles.amountText}>{val.id_trb}</Text>
              </View>
              <View>
                <Text>Jumlah Pinjaman</Text>
                <Text style={styles.amountText}>
                  {toRupiah(val.amountdebt)}
                </Text>
              </View>
              <View>
                <Text>Status</Text>
                <Text style={styles.amountText}>{val.status}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Anda Belum Punya Peminjam</Text>
        )}
      </ScrollView> */}
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
    paddingTop: 40,
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
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    color: "#fff",
  },
  usahaDashboard: {
    fontFamily: "Inter_300Light",
    color: "#fff",
    marginTop: 5,
  },
  pinjamansDashboard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: -32,
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
    fontFamily: "Inter_400Regular",
    fontSize: 10,
  },
  danaValueHead: {
    fontFamily: "Inter_600SemiBold",
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
    fontFamily: "Inter_600SemiBold",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  listAngsuran: {
    paddingHorizontal: 20,
    width: "100%",
    height: "40%",
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
    fontFamily: "Inter_600SemiBold",
    marginTop: 10,
    fontSize: 12,
  },
});
