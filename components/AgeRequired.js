import { StyleSheet, View, Text } from "react-native";
function AgeRequired({ children }) {
  return <View style={styles.background}>{children}</View>;
}
export default AgeRequired;
const styles = StyleSheet.create({
  background: {
    backgroundColor: "red",
  },
});
