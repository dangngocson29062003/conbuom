import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../store/context/ThemeContext";
function FlatButton({ label, children, onPress }) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Text style={{ color: colors.text }}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontWeight: "bold",
            textDecorationLine: "underline",
            color: "#cd5c5c",
          }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default FlatButton;
