import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get("window");
function BuyButton({ paymentMethod, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={paymentMethod}>
          <View style={styles.payment}>
            <Text style={[styles.text, { marginEnd: 5 }]}>Tiền mặt</Text>
            <Ionicons name="chevron-up-circle" color={"white"} size={24} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              backgroundColor: "#22092C",
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text style={[styles.text, { fontSize: 16 }]}>Đặt vé</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default BuyButton;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.08,
    backgroundColor: "#FF5524",
    borderBottomEndRadius: 50,
    paddingHorizontal: 20,
    borderBottomStartRadius: 50,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  payment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 0.1,
  },
});
