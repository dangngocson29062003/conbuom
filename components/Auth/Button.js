import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../store/context/ThemeContext";
function Button({ onPress, children }) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={["#19A1BE", "#7D4192"]} style={styles.linear}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: colors.background700,
            },
          ]}
        >
          <Text style={[styles.title, { color: colors.text }]}>{children}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default Button;
const styles = StyleSheet.create({
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
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
