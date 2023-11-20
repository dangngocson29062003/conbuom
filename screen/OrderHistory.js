import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useTheme } from "../store/context/ThemeContext";
import { TicketContext } from "../store/context/TicketContext";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../store/context/AuthContext";
import { getBill } from "../util/bill";
function OrderHistory({ navigation }) {
  const { colors } = useTheme();
  const [data, setData] = useState();
  const ticketCtx = useContext(TicketContext);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function getData() {
      const response = await getBill(authCtx.data.email);
      setData(response);
    }
    getData();
  }, [getBill(authCtx.data.email)]);
  function render(data) {
    const item = data.item;
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("HistoryDetail", { movieData: item })
          }
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 10,
            borderColor: colors.text,

            shadowColor: colors.text,
            shadowOffset: {
              height: 0,
              width: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elavation: 5,
            borderRadius: 8,
            backgroundColor: colors.temp,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              //alignItems: "center",
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                marginEnd: 20,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <ImageBackground
                source={{ uri: item.moviePoster }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  color: colors.text,
                  fontWeight: "bold",
                  paddingTop: 10,
                }}
              >
                {item.movieDetail}
              </Text>
              <Text style={{ color: colors.text }}>
                {item.day} {item.date}
              </Text>

              <Text style={{ color: colors.text }}>
                Ngày thanh toán: {item.createAt}
              </Text>
            </View>
          </View>
          {/* <Ionicons name="play-circle-outline" color={"white"} size={46} /> */}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.billID}
          renderItem={render}
        />
      </View>
    </SafeAreaView>
  );
}
export default OrderHistory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
