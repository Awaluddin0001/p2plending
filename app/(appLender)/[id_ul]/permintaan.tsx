import { FontAwesome } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams, Redirect } from "expo-router";
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
} from "react-native";

import toRupiah from "@/components/util/toRupiah";
import UserImage from "@/components/util/userImage";
import { color } from "@/constants/Colors";
// import { useMyContext } from "../../../../src/components/util/LoginContext";
// import { getEB } from "../../../../src/components/util/EventBus";

export default function Permintaan() {
  const router = useRouter();
  //   const contextData = useMyContext();
  const [listBorrower, setListborrower] = useState();
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const fetchDanatersalurkan = async () => {
  //       try {
  //         if (contextData.id_ul) {
  //           const body = {};
  //           const borrower = await getEB(
  //             body,
  //             "/api/eventbus/donescoring",
  //             setLoading
  //           );
  //           setListborrower(borrower.data);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchDanatersalurkan();
  //   }, [contextData]);

  //   const reviewPeminjam = (id) => {
  //     router.push(
  //       `${process.env.EXPO_PUBLIC_ROUTE_LENDER_DASH}/${contextData.id_ul}/${id}/detail`
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
      <Text
        style={{
          marginTop: 20,
          width: "100%",
          paddingLeft: 20,
          fontFamily: "InterMedium",
        }}
      >
        List Permintaan Dana
      </Text>
      <ScrollView style={styles.scrollList}>
        {/* {loading ? (
          <ActivityIndicator size="large" color={color.primary} />
        ) : listBorrower?.length > 0 ? (
          listBorrower?.map((val) => (
            <Pressable
              style={styles.cardList}
              onPress={() => reviewPeminjam(val.id_trb)}
              key={val.id_trb}
            >
              <View>
                <Text style={styles.textBold}>Nama</Text>
                <Text>{val.bname}</Text>
              </View>

              <View>
                <Text style={styles.textBold}>Jumlah Permintaan</Text>
                <Text>
                  {toRupiah(val.amountdebt ? val.amountdebt : 0, {
                    floatingPoint: 0,
                    spaceBeforeUnit: true,
                  })}
                </Text>
              </View>

              <View>
                <Text style={styles.textBold}>Score</Text>
                <Text style={styles.textBold}>
                  {val.scorealphabet}({val.scorenumber})
                </Text>
              </View>
            </Pressable>
          ))
        ) : (
          <Text>Belum ada pengajuan pinjaman</Text>
        )} */}
      </ScrollView>
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
    flexDirection: "row",
    gap: 5,
  },
  textBold: {
    fontFamily: "InterSemiBold",
  },
});
