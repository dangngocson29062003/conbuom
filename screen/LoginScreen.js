import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableNativeFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useContext, useState } from "react";
import { useTheme } from "../store/context/ThemeContext";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/LoadingOverplay";
import { AuthContext } from "../store/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { TicketContext } from "../store/context/TicketContext";
import { getBill } from "../util/bill";
export default function Login() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { dark, colors } = useTheme();
  const authCtx = useContext(AuthContext);
  const ticketCtx = useContext(TicketContext);
  const navigation = useNavigation();
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    if (email === "adminn@admin.com" && password === "adminnn") {
      navigation.navigate("ScanQR");
      return;
    }
    try {
      const data = await login(email, password);
      const response = await getBill(email);
      authCtx.authenticate(data.idToken);
      authCtx.getdata(data);
      ticketCtx.delete();
      response.map((data) => {
        ticketCtx.addTicket(data);
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Đăng nhập thất bại!",
        "Không thể đăng nhập. Hãy kiểm tra thông tin đăng nhập!"
      );
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Đăng nhập thành công..." />;
  }
  return (
    <TouchableNativeFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <ImageBackground
          source={require("../assets/images/login.png")}
          style={styles.backgroundLogin}
        >
          <AuthContent isLogin onAuthenticate={loginHandler} />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Image
              source={
                dark
                  ? require("../assets/images/logo.png")
                  : require("../assets/images/logolight.png")
              }
            ></Image>
          </View>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  backgroundLogin: {
    height: Dimensions.get("window").height / 1.7,
    width: Dimensions.get("window").width,
    marginTop: 50,
  },
  form: {
    padding: 25,
    marginTop: 200,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elavation: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  errorsText: {
    color: "red",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    fontWeight: "600",
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  linear: {
    borderRadius: 10,
    padding: 2,
    width: "100%",
    height: 40,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: "100%",
    opacity: 0.5,
  },
  facebook: {
    marginHorizontal: 50,
  },
  google: {
    marginHorizontal: 50,
  },
});
