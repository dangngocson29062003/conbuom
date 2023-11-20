import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../store/context/ThemeContext";

function LineLong({ children }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ width: "20%", color: colors.text, opacity: 0.45 }}>
        {children}
      </Text>
      <Text
        style={{
          borderColor: colors.selectedIcon,
          borderWidth: 0.5,
          height: 1,
          width: "80%",
          opacity: 0.45,
        }}
      />
    </View>
  );
}

export default LineLong;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});
