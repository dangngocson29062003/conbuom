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
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/LoadingOverplay";
import { AuthContext } from "../store/context/AuthContext";

export default function Signup() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { dark, colors } = useTheme();
  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password, firstName, lastName }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password, firstName + " " + lastName);
    } catch (error) {
      Alert.alert("Đăng kí thất bại", "Tài khoản đã tồn tại");
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Tạo tài khoản thành công..." />;
  }
  return (
    <TouchableNativeFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <ImageBackground
          source={require("../assets/images/login.png")}
          style={styles.backgroundLogin}
        >
          <AuthContent onAuthenticate={signupHandler} />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
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
    marginTop: 125,
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
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  errorsText: {
    color: "red",
    textAlign: "center",
    marginVertical: 10,
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
    marginTop: 10,
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

  inputInvalid: {
    backgroundColor: "#d10000",
  },
});
