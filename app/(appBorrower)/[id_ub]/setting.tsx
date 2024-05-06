import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useLocalSearchParams, Redirect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from "react-native";

//   import { setStorageItemAsync } from "../../../../src/components/util/LoginStorage";
//   import { useMyContext } from "../../../../src/components/util/LoginContext";
import UserImage from "@/components/util/userImage";
import { color } from "@/constants/Colors";

export default function Setting() {
  const router = useRouter();
  // const contextData = useMyContext();

  // useEffect(() => {
  //   async function redirect() {
  //     const jwt = SecureStore.getItemAsync("jwt");
  //     if (!jwt) {
  //       router.push(`/`);
  //     }
  //   }
  //   redirect();
  // }, []);

  // const editDatapribadi = () => {
  //   router.push(
  //     `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_DASH}/editDatapribadi`
  //   );
  // };
  // const editDatausaha = () => {
  //   router.push(`${process.env.EXPO_PUBLIC_ROUTE_BORROWER_DASH}/editDatausaha`);
  // };
  // const editDatadarurat = () => {
  //   router.push(
  //     `${process.env.EXPO_PUBLIC_ROUTE_BORROWER_DASH}/editDatadarurat`
  //   );
  // };

  // const logoutAccount = async () => {
  //   setStorageItemAsync("jwt");
  //   router.push(`/`);
  // };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.tagHead}>Akun:</Text>
        {/* <Pressable style={styles.editTab} onPress={editDatapribadi}>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <UserImage foto={contextData.foto} gender={contextData.gender} />
            <View>
              <Text style={styles.nameDashboard}>{contextData.name}</Text>
              <Text style={styles.usahaDashboard}>{contextData.email}</Text>
            </View>
          </View>
        </Pressable>
        <Text style={styles.tagHead}>Usaha:</Text>
        <Pressable style={styles.editTab} onPress={editDatausaha}>
          <Text style={styles.nameDashboard}>{contextData.business}</Text>
          <Text style={styles.usahaDashboard}>lorem ipsum</Text>
        </Pressable>
        <Text style={styles.tagHead}>Bank:</Text>
        <Pressable style={styles.editTab} onPress={editDatadarurat}>
          <Text style={styles.nameDashboard}>Lorem Ipsum</Text>
          <Text style={styles.usahaDashboard}>xxxxxxxxxxxxxx</Text>
        </Pressable>
        <Text style={styles.tagHead}>Darurat:</Text>
        <Pressable style={styles.editTab} onPress={editDatadarurat}>
          <Text style={styles.nameDashboard}>Lorem Ipsum</Text>
          <Text style={styles.usahaDashboard}>+62 851328102</Text>
        </Pressable>
        <Pressable style={styles.logOut} onPress={logoutAccount}>
          <Text style={styles.nameDashboard}>Log Out</Text>
          <Entypo name="log-out" size={24} color="black" />
        </Pressable> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: 20,
    marginTop: 30,
    padding: 20,
  },
  editTab: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingVertical: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingBottom: 12,
    borderTopColor: "#000",
    borderTopWidth: 1,
  },
  fotoDashboard: {
    borderRadius: 999,
    width: 60,
    height: 60,
  },
  nameDashboard: {
    fontFamily: "InterMedium",
    fontSize: 16,
  },
  usahaDashboard: {
    fontFamily: "InterLight",
    marginTop: 5,
  },
  tagHead: {
    fontFamily: "InterMedium",
    fontSize: 16,
    marginTop: 15,

    width: "100%",
  },
  logOut: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingBottom: 12,
    borderTopColor: "#000",
    borderTopWidth: 1,
  },
});
