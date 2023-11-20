import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../store/context/ThemeContext";
function UserIcon({ icon, onPress, size, children }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flexDirection: "row", paddingVertical: 12, marginStart: 36 }}
        onPress={onPress}
      >
        <View>
          <MaterialCommunityIcons name={icon} color={colors.text} size={size} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.text, { color: colors.text }]}>{children}</Text>
        </View>

        <View>
          <MaterialIcons
            name={"keyboard-arrow-right"}
            color={"white"}
            size={25}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default UserIcon;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    paddingHorizontal: 22,
    justifyContent: "center",
  },
});
