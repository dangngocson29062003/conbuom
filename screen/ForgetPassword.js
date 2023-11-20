import {
  StyleSheet,
  TextInput,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from "react-native";
import Button from "../components/Auth/Button";
import { useTheme } from "../store/context/ThemeContext";
import { useState } from "react";
import { resetPassword } from "../util/auth";
function ForgetPassword() {
  const { colors } = useTheme();
  const [txtInput, setTxtInput] = useState("");
  async function confirm() {
    await resetPassword(txtInput);
  }
  return (
    <ImageBackground
      source={require("../assets/images/login.png")}
      style={styles.backgroundLogin}
    >
      <View style={[styles.form, { backgroundColor: colors.background700 }]}>
        <View>
          <Text style={{ fontWeight: "600" }}>Nhập Email</Text>
          <TextInput
            style={styles.input}
            value={txtInput}
            onChangeText={(text) => {
              setTxtInput(text);
            }}
          />
        </View>
        <Button children={"Gửi mail"} onPress={confirm} />
      </View>
    </ImageBackground>
  );
}
export default ForgetPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundLogin: {
    height: Dimensions.get("window").height / 1.7,
    width: Dimensions.get("window").width,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    marginVertical: 10,
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
});
