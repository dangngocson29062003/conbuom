import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { useTheme } from "../store/context/ThemeContext";
function TextBill({ children, value }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.textDescription, { color: colors.text }]}>
        {children}
      </Text>
      <Text style={[styles.textValue, { color: colors.text }]}>{value}</Text>
    </View>
  );
}
export default TextBill;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },
  textDescription: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    opacity: 0.7,
  },
  textValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
