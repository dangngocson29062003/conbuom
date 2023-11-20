import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./IconButton";
function ButtonPlayVideo({ children, style, onPress }) {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>TRAILER</Text>
        <Ionicons name="play-circle-outline" color={"white"} size={64} />
      </TouchableOpacity>
    </View>
  );
}
export default ButtonPlayVideo;
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
});
