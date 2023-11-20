import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../store/context/AuthContext";

function ButtonCustom({ children, style, onPress, id, date, time }) {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const PressHandler = () => {
    if (authCtx.isAuthenticated) {
      if (date && time)
        return navigation.navigate("SeatScreen", {
          id: id,
          date: date,
          time: time,
        });
      else return Alert.alert("Thông báo", "Vui lòng chọn suất chiếu");
    } else {
      Alert.alert("Đặt vé thất bại", "Vui lòng đăng nhập");
      navigation.navigate("User");
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={PressHandler} style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ButtonCustom;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF5524",
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 50,
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 20,
    textAlign: "center",
  },
});
