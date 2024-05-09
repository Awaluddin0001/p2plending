import { Link, useFocusEffect, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { color } from "@/constants/Colors";
import { appDimension, appFontSize } from "@/constants/Sizes";

export default function Index() {
  const router = useRouter();
  useFocusEffect(
    useCallback(() => {
      const session = async () => {
        const token = await SecureStore.getItemAsync("token");
        const id_ub = await SecureStore.getItemAsync("id_ub");
        const id_ul = await SecureStore.getItemAsync("id_ul");

        if (token && id_ub) {
          router.replace(`/(appBorrower)/${id_ub}/home`);
        }
        if (token && id_ul) {
          router.replace(`/(appLender)/${id_ul}/home`);
        }
      };
      session();
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.headerText}>Login Sebagai :</Text>
        <View style={styles.chooseUsers}>
          <Link href="/(loginBorrower)" style={styles.linkCard}>
            <View>
              <Image
                source={require("@/assets/images/PenerimaDana.png")}
                style={styles.imageLogin}
              />
              <Text style={{ ...styles.userText, color: `${color.primary}` }}>
                Penerima Dana
              </Text>
            </View>
          </Link>
          <Link href="/(loginLender)" style={styles.linkCard}>
            <View>
              <Image
                source={require("@/assets/images/PemberiDana.png")}
                style={styles.imageLogin}
              />
              <Text style={{ ...styles.userText, color: `${color.secondary}` }}>
                Pemberi Dana
              </Text>
            </View>
          </Link>
        </View>
      </View>
      {/* <View>
        <Link
          href={{
            pathname: "/(registerBorrower)/PAB27870/regTtd",
          }}
        >
          go testing page
        </Link>
      </View> */}
      <View style={styles.logoContainer}>
        <View style={styles.wrapperLogo}>
          <Text style={styles.textLogoSupport}>
            Telah Berizin dan diawasi oleh :
          </Text>
          <Image
            source={require("@/assets/images/OJK_Logo.png")}
            style={styles.logoImg}
          />
        </View>
        <View style={styles.wrapperLogo}>
          <Text style={{ ...styles.textLogoSupport, marginTop: 8 }}>
            Anggota Terdaftar Dari :
          </Text>
          <Image
            source={require("@/assets/images/afpi-gabung.png")}
            style={{ ...styles.logoImg, marginTop: 48 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: appDimension.widthScreen < 720 ? 16 : 24,
    gap: appDimension.heightScreen < 1280 ? 80 : 180,
    backgroundColor: "#eee",
  },
  cardContainer: {
    marginTop: appDimension.heightScreen < 1280 ? 100 : 150,
  },
  logoContainer: {
    flexDirection: "row",
    gap: appDimension.widthScreen < 720 ? 16 : 24,
    justifyContent: "flex-end",
  },
  imageLogin: {
    transform: [{ scale: appDimension.widthScreen < 720 ? 0.8 : 1 }],
  },
  headerText: {
    fontSize: appFontSize.headerFs,
    color: "#333",
    fontFamily: "InterBold",
    textAlign: "center",
  },
  chooseUsers: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 22,
    flexDirection: "row",
    marginTop: 22,
  },
  linkCard: {
    padding: 12,
    gap: 23,
    backgroundColor: "#eee",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  userText: {
    fontFamily: "InterSemiBold",
    textAlign: "center",
    marginTop: 11,
  },
  logoImg: {
    height: 33,
    width: 100,
    marginTop: 22,
    marginHorizontal: "auto",
  },
  textLogoSupport: {
    fontSize: appFontSize.normalFs,
    color: "#777",
    textAlign: "center",
    fontFamily: "InterRegular",
  },
  wrapperLogo: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
