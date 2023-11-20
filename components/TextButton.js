import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function TextButton({ children, style, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={style}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default TextButton;
const styles = StyleSheet.create({
  text: {},
});
