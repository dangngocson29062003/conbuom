import AuthForm from "./AuthForm";
import { useState } from "react";
import { Alert, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FlatButton from "../FlatButton";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../store/context/ThemeContext";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  async function handleSubmit(credentials) {
    let { firstName, lastName, confirmPassword, password, email } = credentials;
    email = email.trim();
    password = password.trim();
    const firstNameIsValid = firstName.length > 0;
    const lastNameIsValid = lastName.length > 0;
    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;
    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin &&
        (!lastNameIsValid || !firstNameIsValid || !passwordsAreEqual))
    ) {
      Alert.alert("Nhập lỗi", "Hãy kiểm tra lại dữ liệu bạn nhập");
      setCredentialsInvalid({
        firstName: !firstNameIsValid,
        lastName: !lastNameIsValid,
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password, firstName, lastName });
  }
  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  return (
    <View>
      <View style={[styles.form, { backgroundColor: colors.background700 }]}>
        <AuthForm
          isLogin={isLogin}
          onSubmit={handleSubmit}
          credentialsInvalid={credentialsInvalid}
        />
        <Text
          style={{
            marginTop: 20,
            fontWeight: "600",
            textAlign: "center",
            color: colors.text,
          }}
        >
          {" "}
          Hoặc{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity style={styles.facebook}>
            <MaterialCommunityIcons name="facebook" size={50} color="#4354CE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.google}>
            <FontAwesome
              name="google-plus-official"
              size={50}
              color="#CE4343"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatButton
        onPress={switchAuthModeHandler}
        label={
          isLogin
            ? "Bạn chưa có tài khoản PEEKABOO?"
            : "Bạn đã có tài khoản PEEKABOO?"
        }
        children={isLogin ? "Đăng kí" : "Đăng nhập"}
      />
    </View>
  );
}
export default AuthContent;
const styles = StyleSheet.create({
  form: {
    padding: 25,
    marginTop: 150,
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
  facebook: {
    marginHorizontal: 50,
  },
  google: {
    marginHorizontal: 50,
  },
});
