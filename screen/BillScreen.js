import { useContext, useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { fetchMoviesDetail } from "../util/http";
import LineLong from "../components/line";
import TextBill from "../components/TextBill";
import { ScrollView } from "react-native";
import BuyButton from "../components/BuyButton";
import { useTheme } from "../store/context/ThemeContext";
import { storeBill } from "../util/bill";
import { AuthContext } from "../store/context/AuthContext";
import { payment } from "../util/payment";
import WebView from "react-native-webview";
import { TicketContext } from "../store/context/TicketContext";
import LoadingOverlay from "../components/LoadingOverplay";
const { width, height } = Dimensions.get("window");

function BillScreen({ route, navigation }) {
  const { price, selectedSeats, id, seatNumbers, date, time } = route.params;
  const [movieDetail, setMovieDetail] = useState([]);
  const { colors } = useTheme();
  const authCtx = useContext(AuthContext);
  const ticketCtx = useContext(TicketContext);
  const [isLoading, setIsLoading] = useState(false);
  useLayoutEffect(() => {
    async function getMovies() {
      const movie = await fetchMoviesDetail(id);
      setMovieDetail(movie);
    }
    getMovies();
  }, []);
  const month = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const d = new Date();
  let name = month[d.getMonth()];
  const year = new Date().getFullYear();
  const rdNum = Math.floor(Math.random() * 100000);
  console.log(d.getDate());
  const ticketDetail = {
    billID: rdNum,
    movieID: id,
    movieDetail: movieDetail.title,
    moviePoster: movieDetail.poster,
    movieBackdrop: movieDetail.backdrop,
    date: name,
    time: time,
    numberOfSeats: selectedSeats.length,
    selectedSeats: seatNumbers,
    email: authCtx.data.email,
    displayName: authCtx.data.displayName,
    total: price,
    day: date.day,
    date: date.date,
    time: time,
    room: Math.floor(Math.random() * 5 + 1),
    createAt: `${d.getDate()}/ ${
      d.getMonth() + 1
    }/ ${d.getFullYear()} ,${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`,
    status: false,
  };
  const booking = async () => {
    setIsLoading(true);
    await storeBill(
      {
        ...ticketDetail,
      },
      movieDetail.title
    );
    ticketCtx.addTicket({ ...ticketDetail });
    setIsLoading(false);
    navigation.navigate("MyTickets");
  };
  if (isLoading) {
    return <LoadingOverlay message="Đặt vé thành công..." />;
  }
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "top",
          justifyContent: "center",
        }}
      >
        <Image source={{ uri: movieDetail.poster }} style={styles.poster} />
        <View style={{ width: width * 0.6 }}>
          <Text
            style={[
              styles.text,
              { color: colors.text, fontSize: 24, fontWeight: "bold" },
            ]}
            numberOfLines={2}
          >
            {movieDetail.title}
          </Text>
          <Text style={[styles.text, { color: colors.text }]}>
            {date.day}, {date.date} {name}, {year}
          </Text>
          <Text style={[styles.text, { color: colors.text }]}>{time}</Text>
        </View>
      </View>
      <Text style={[styles.title, { color: colors.text }]}>Hóa đơn</Text>
      <ScrollView style={{ paddingBottom: 20 }}>
        <View
          style={{
            backgroundColor: colors.background700,
            width: "100%",
            height,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View>
              <Text
                style={{ color: colors.text, fontSize: 16, fontWeight: "bold" }}
              >
                {" "}
                x {selectedSeats.length} Vé xem phim
              </Text>
              <Text style={{ color: "#aba9a9", opacity: 0.7 }}>
                {movieDetail.title}
              </Text>
              <Text style={{ color: "#aba9a9", opacity: 0.7 }}>
                {movieDetail.ageRequired}
              </Text>
            </View>
            <Image
              source={{ uri: movieDetail.poster }}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
          </View>
          <LineLong children={"Chi tiết hóa đơn"} />
          <View>
            <TextBill children={"Mã đơn:"} value={rdNum} />
            <TextBill children={"Số lượng ghế:"} value={selectedSeats.length} />
            <TextBill
              children={"Ghế:"}
              value={seatNumbers.map((seatNumber) => (
                <Text>{seatNumber} </Text>
              ))}
            />
            <TextBill children={"Bắp nước:"} value={"Thêm"} />
          </View>
          <LineLong children={"Thanh toán"} />
          <View>
            <TextBill
              children={"Giá vé:"}
              value={`${price.toLocaleString("vi-VN")}đ`}
            />
            <TextBill children={"Giá giảm"} value={"0đ"} />
            <TextBill
              children={"Tổng cộng"}
              value={`${price.toLocaleString("vi-VN")}đ`}
            />
          </View>
        </View>
      </ScrollView>
      <BuyButton onPress={booking} />
    </View>
  );
}
export default BillScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 10,
  },
  poster: {
    width: "25%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
    marginEnd: 10,
  },
  text: {
    color: "white",
    fontSize: "16",
    fontWeight: "500",
    marginTop: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginVertical: 20,
    textAlign: "center",
  },
});
