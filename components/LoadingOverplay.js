import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../store/context/ThemeContext";

function LoadingOverlay({ message }) {
  const { colors } = useTheme();
  return (
    <View
      style={[styles.rootContainer, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.message, { color: colors.text }]}>{message}</Text>
      <ActivityIndicator color={colors.text} size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
