import { View, TextInput, Text, StyleSheet } from "react-native";
import { useTheme } from "../../store/context/ThemeContext";
import IconButton from "../IconButton";
import { useState } from "react";
function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const toggle = () => {
    setShowPassword(!showPassword);
  };
  const { colors } = useTheme();
  return (
    <View style={{ width: "100%" }}>
      {label.includes("khẩu") ? (
        <View>
          <Text style={[styles.text, { color: colors.text }]}>{label}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.background,
                  flex: 1,
                  color: colors.text,
                },
                isInvalid && [styles.inputInvalid],
              ]}
              placeholderTextColor={colors.icon}
              keyboardType={keyboardType}
              secureTextEntry={!showPassword}
              value={value}
              autoCorrect={false}
              onChangeText={onUpdateValue}
              autoCapitalize="none"
            />
            <View style={{ position: "absolute", top: 12, right: 10 }}>
              {!showPassword ? (
                <IconButton
                  icon={"eye"}
                  size={24}
                  color={colors.icon}
                  onPress={toggle}
                />
              ) : (
                <IconButton
                  icon={"eye-off"}
                  size={24}
                  color={colors.icon}
                  onPress={toggle}
                />
              )}
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text style={[styles.text, { color: colors.text }]}>{label}</Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.background, color: colors.text },
              isInvalid && [styles.inputInvalid],
            ]}
            placeholderTextColor={colors.icon}
            keyboardType={keyboardType}
            secureTextEntry={secure}
            value={value}
            autoCorrect={false}
            onChangeText={onUpdateValue}
            autoCapitalize="none"
          />
        </View>
      )}
    </View>
  );
}
export default Input;
const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
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
  inputInvalid: {
    backgroundColor: "rgba(190, 0, 0, 0.5)",
  },
});
