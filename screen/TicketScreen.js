import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../store/context/ThemeContext";
import { useContext } from "react";
import { AuthContext } from "../store/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { TicketContext } from "../store/context/TicketContext";
import { FlatList } from "react-native";
import QRCode from "react-native-qrcode-svg";
const TicketScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const ticketCtx = useContext(TicketContext);
  if (authCtx.isAuthenticated === false) {
    Alert.alert("Thao tác thất bại", "Vui lòng đăng nhập!");
    return navigation.navigate("User");
  }
  function render(data) {
    const item = data.item;
    return (
      <View style={styles.ticketContainer}>
        <ImageBackground
          source={{ uri: item.moviePoster }}
          style={styles.ticketBGImage}
        >
          <LinearGradient
            colors={["rgba(255,85,36,0)", "orange"]}
            style={styles.linearGradient}
          >
            <View
              style={[
                styles.blackCircle,
                { position: "absolute", bottom: -50, left: -50 },
              ]}
            ></View>
            <View
              style={[
                styles.blackCircle,
                { position: "absolute", bottom: -50, right: -50 },
              ]}
            ></View>
          </LinearGradient>
        </ImageBackground>
        <View
          style={{
            borderRadius: 1,
            width: 300,
            borderStyle: "dashed",
            borderWidth: 3,
            borderColor: colors.background,
            backgroundColor: "orange",
          }}
        ></View>

        <View style={styles.ticketFooter}>
          <View
            style={[
              [styles.blackCircle, { backgroundColor: colors.background }],
              { position: "absolute", top: -50, left: -50 },
            ]}
          ></View>
          <View
            style={[
              [styles.blackCircle, { backgroundColor: colors.background }],
              { position: "absolute", top: -50, right: -50 },
            ]}
          ></View>
          <View style={styles.ticketDateContainer}>
            <View style={styles.subtitleContainer}>
              <Text style={styles.dateTitle}>{item.day}</Text>
              <Text style={styles.subtitle}>{item.date}</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={24}
                color="white"
                style={styles.clockIcon}
              />

              <Text style={styles.subtitle}>{item.time}</Text>
            </View>
          </View>
          <View style={styles.ticketSeatContainer}>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Rạp</Text>
              <Text style={styles.subtitle}>{item.room}</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Hàng</Text>
              <Text style={styles.subtitle}>{item.selectedSeats + ""}</Text>
            </View>

            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Tổng</Text>
              <Text style={styles.subtitle}>
                {item.total.toLocaleString("vi-VN")}đ
              </Text>
            </View>
          </View>
          <QRCode value={item.movieDetail} size={50} />
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View
        style={{
          with: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <FlatList horizontal data={ticketCtx.ticket} renderItem={render} />
      </View>
    </SafeAreaView>
  );
};
export default TicketScreen;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "black",
  },
  appHeaderContainer: {
    marginHorizontal: 36,
    marginTop: 20 * 2,
  },
  ticketContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  ticketBGImage: {
    alignSelf: "center",
    width: 300,
    aspectRatio: 200 / 300,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  linearGradient: {
    height: "70%",
  },
  ticketFooter: {
    backgroundColor: "orange",

    width: 300,
    alignItems: "center",
    paddingBottom: 36,
    alignSelf: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  ticketDateContainer: {
    flexDirection: "row",
    gap: 36,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  ticketSeatContainer: {
    gap: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  dateTitle: {
    fontSize: 24,
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
  },
  subheading: {
    fontSize: 18,
    color: "white",
  },
  subtitleContainer: {
    alignItems: "center",
  },
  clockIcon: {
    paddingBottom: 10,
  },
  barcodeImage: {
    height: 50,
    aspectRatio: 158 / 52,
  },
  blackCircle: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: "black",
  },
});
