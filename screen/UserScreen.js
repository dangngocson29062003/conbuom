import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";
import UserIcon from "../components/UserIcon";
import LineLong from "../components/line";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../store/context/ThemeContext";
import { AuthContext } from "../store/context/AuthContext";
const UserScreen = ({ navigation }) => {
  const { dark, colors, setScheme } = useTheme();
  const authCtx = useContext(AuthContext);
  const ToggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };
  async function Logout() {
    authCtx.logout();
  }
  async function Login() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {authCtx.isAuthenticated ? (
        <View>
          <View style={styles.infoContainer}>
            <View style={styles.avata}>
              <View style={styles.avataContainer}>
                <Image
                  source={require("../assets/images/logo.png")}
                  style={styles.avataImage}
                />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.userName, { color: colors.text }]}>
                {authCtx.data ? authCtx.data.displayName : ""}
              </Text>
              <Text style={[styles.email, { color: colors.text }]}>
                {authCtx.data ? authCtx.data.email : ""}
              </Text>
            </View>
          </View>
          <ScrollView style={{ width: "100%", marginBottom: 50 }}>
            <View style={styles.settingContainer}>
              <LineLong children={"Activiti"} />
              <UserIcon
                icon="cards-heart-outline"
                size={25}
                children={"Danh sách phim yêu thích"}
                onPress={() => {
                  navigation.navigate("Favorites");
                }}
              />

              <UserIcon
                icon="cart-outline"
                size={25}
                children={"Lịch sử đơn hàng"}
                onPress={() => {
                  navigation.navigate("OrderHistory");
                }}
              />

              <UserIcon
                icon="wallet-outline"
                size={25}
                children={"Phương thức thanh toán"}
              />

              <UserIcon
                icon="ticket-percent-outline"
                size={25}
                children={"Voucher của tôi"}
              />

              <LineLong children={"General"} />

              <UserIcon
                icon="account-outline"
                size={25}
                children={"Tài khoản"}
              />

              <UserIcon
                icon="bell-ring-outline"
                size={25}
                children={"Thông báo"}
              />

              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 12,
                  marginStart: 36,
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="eye-outline"
                  size={25}
                  color={colors.text}
                />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: colors.text,
                      fontWeight: "700",
                      fontSize: 15,
                      paddingHorizontal: 22,
                      justifyContent: "center",
                    }}
                  >
                    Chế độ tối
                  </Text>

                  <Switch
                    trackColor={{ false: "grey", true: "orange" }}
                    thumbColor={dark ? "yellow" : "grey"}
                    value={dark}
                    onValueChange={ToggleTheme}
                  />
                </View>
              </View>

              <LineLong children={"About"} />

              <UserIcon
                icon="help-circle-outline"
                color={"white"}
                size={25}
                children={"Trợ giúp"}
              />

              <UserIcon
                icon="information-outline"
                color={"white"}
                size={25}
                children={"Về chúng tôi"}
              />

              <UserIcon
                icon="logout"
                color={"white"}
                size={25}
                children={"Đăng xuất"}
                onPress={Logout}
              />
            </View>
          </ScrollView>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/login.png")}
            style={{ width: "100%", marginTop: 20 }}
          />
          <Text
            style={{
              textAlign: "center",
              color: colors.text,
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            PEEKABOO
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: colors.text,
              fontSize: 20,
              fontWeight: "300",
              marginTop: 5,
            }}
          >
            Screen X - công nghệ chiếu phim đa diện
          </Text>

          <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity onPress={Login}>
              <LinearGradient
                colors={["#19A1BE", "#7D4192"]}
                start={[0, 0]}
                end={[1, 1]}
                style={{
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderRadius: 10,
                  padding: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.background,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    Tham gia
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default UserScreen;
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },

  textHeader: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },

  avata: {
    flexDirection: "row",
  },

  infoContainer: {
    marginBottom: 16,
    flexDirection: "row",
  },

  textContainer: {
    marginTop: 36,
    textAlign: "center",
    justifyContent: "flex-start",
    marginStart: -12,
  },

  avataContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 1,
    overflow: "hidden",
    marginHorizontal: 36,
    marginTop: 32,
  },
  avataImage: {
    width: "100%",
    height: "100%",
  },
  userName: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 6,
    fontSize: 15,
  },
  email: {
    color: "#A2A2A2",
  },

  accumulationContainer: {
    borderTopWidth: 1,
    borderTopColor: "white",
  },
  accumulation: {},

  settingContainer: {
    paddingTop: 12,
    marginEnd: 16,
    paddingHorizontal: 20,
    width: "100%",
  },
});
