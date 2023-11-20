import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Button from "./Button";
import Input from "./Input";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../store/context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const { colors } = useTheme();
  const navigation = useNavigation();
  const {
    firstName: firstNameIsValid,
    lastName: lastNameIsValid,
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "firstName":
        setEnteredFirstName(enteredValue);
        break;
      case "lastName":
        setEnteredLastName(enteredValue);
        break;
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View>
      <View>
        {!isLogin && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Input
                label="Họ"
                onUpdateValue={updateInputValueHandler.bind(this, "firstName")}
                value={enteredFirstName}
                keyboardType="default"
                isInvalid={firstNameIsValid}
              />
            </View>
            <View style={{ flex: 1, marginStart: 10 }}>
              <Input
                label="Tên"
                onUpdateValue={updateInputValueHandler.bind(this, "lastName")}
                value={enteredLastName}
                keyboardType="default"
                isInvalid={lastNameIsValid}
              />
            </View>
          </View>
        )}

        <Input
          label="Tài khoản"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />

        <Input
          label="Mật khẩu"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {isLogin && (
          <View style={{ alignItems: "flex-end", marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgetPassword");
              }}
            >
              <Text style={{ color: colors.text }}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
        )}
        {!isLogin && (
          <Input
            label="Xác nhận mật khẩu"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}

        <Button
          onPress={submitHandler}
          children={isLogin ? "Đăng nhập" : "Đăng kí"}
        />
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({});
