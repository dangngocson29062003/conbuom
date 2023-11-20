import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { fetchMoviesDetail } from "../util/http";
import { useTheme } from "../store/context/ThemeContext";
const SeatScreen = ({ navigation, route }) => {
  const { id, date, time } = route.params;
  const [movieDetail, setMovieDetail] = useState([]);
  const { colors } = useTheme();
  useLayoutEffect(() => {
    async function getMovies() {
      const movie = await fetchMoviesDetail(id);
      setMovieDetail(movie);
    }
    getMovies();
  }, []);
  const [fee, setFee] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        {
          seat: "1",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "2",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "3",
          selected: false,
          price: 120000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "4",
          selected: false,
          price: 120000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "5",
          selected: false,
          price: 120000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "6",
          selected: false,
          price: 120000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "7",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "8",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
      ],
    },
    {
      row: "B",
      seats: [
        {
          seat: "1",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "2",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "3",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "4",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "5",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "6",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "7",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "8",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
      ],
    },
    {
      row: "C",
      seats: [
        {
          seat: "1",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "2",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "3",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "4",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "5",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "6",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "7",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "8",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
      ],
    },
    {
      row: "D",
      seats: [
        {
          seat: "1",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "2",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "3",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "4",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "5",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "6",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "7",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "8",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
      ],
    },
    {
      row: "E",
      seats: [
        {
          seat: "1",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "2",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "3",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "4",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "5",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "6",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "7",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "8",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
      ],
    },
    {
      row: "F",
      seats: [
        {
          seat: "1",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "2",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "3",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "4",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "5",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "6",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "7",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "8",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
      ],
    },
    {
      row: "G",
      seats: [
        {
          seat: "1",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "2",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "3",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "4",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "5",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "6",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "7",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "8",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
      ],
    },
    {
      row: "H",
      seats: [
        {
          seat: "1",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "2",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "3",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "4",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "5",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "6",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "7",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
        {
          seat: "8",
          selected: false,
          price: 80000,
          bookingStatus: Boolean(Math.round(Math.random())),
        },
      ],
    },
  ]);

  const seatNumbers = selectedSeats.map((seat) => seat.row + seat.seat);

  const renderSeats = () => {
    return rows.map((row, rowIndex) => {
      return (
        <View
          key={row.row}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <View style={{ marginHorizontal: 12 }}>
            <Text
              style={{ color: colors.text, fontSize: 16, fontWeight: "bold" }}
            >
              {row.row}:{" "}
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {row.seats.map((seat, seatIndex) => (
                <Pressable
                  key={`${rowIndex}-${seatIndex}`}
                  style={[
                    [styles.seat, { backgroundColor: colors.text }],
                    selectedSeats.some(
                      (selectedSeat) =>
                        selectedSeat.row == row.row &&
                        selectedSeat.seat == seat.seat
                    ) && styles.selectedSeat,
                    seat.bookingStatus == true && styles.bookedSeat,
                    seat.selected == true && styles.myBooked,
                  ]}
                  disabled={seat.selected == true}
                  onPress={() =>
                    handleSeatPress(
                      row.row,
                      seat.seat,
                      seat.price,
                      seat.bookingStatus
                    )
                  }
                >
                  <Text style={{ color: colors.background700 }}>
                    {seat.bookingStatus ? "x" : seat.seat}
                  </Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      );
    });
  };

  const handleSeatPress = (row, seat, price, bookingStatus) => {
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row == row && selectedSeat.seat == seat
    ); //ham some (kiểm tra xem ít nhất một phần tử trong mảng thỏa mãn một điều kiện nào đó. Nó trả về true nếu ít nhất một phần tử thỏa mãn điều kiện, ngược lại trả về false.)
    if (!bookingStatus) {
      if (isSelected) {
        setSelectedSeats((preState) =>
          preState.filter(
            (selectedSeat) =>
              selectedSeat.row != row || selectedSeat.seat != seat
          )
        );
        setFee((prev) => prev - price);
      } else {
        setSelectedSeats((preState) => [...preState, { row, seat }]);
        setFee((prev) => prev + price);
      }
    } else {
      Alert.alert("Thông báo", "Ghế đã có người đặt");
    }
  };

  // selectedSeats lưu các giá trị mình chọn ghế vào một mảng vd 'row': 'E', 'seat': '6'
  //Nhan nut thanh toan
  const payButtonHandler = () => {
    if (selectedSeats.length > 0) {
      navigation.navigate("BillScreen", {
        price: fee,
        selectedSeats: selectedSeats,
        id: id,
        seatNumbers: seatNumbers,
        date: date,
        time: time,
      });
    } else {
      Alert.alert("Thông báo", "Vui lòng chọn ghế trước khi đặt vé");
    }
  };

  return (
    <>
      <SafeAreaView
        style={[styles.rootContainer, { backgroundColor: colors.background }]}
      >
        <ScrollView style={{ marginTop: "5%" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.screenText, { color: colors.text }]}>
              Màn hình
            </Text>
          </View>
          <View
            style={[
              styles.screenContainer,
              { backgroundColor: colors.icon, shadowColor: colors.icon },
            ]}
          ></View>
          <View>
            {renderSeats()}

            <View
              style={{
                backgroundColor: colors.background700,
                padding: 10,
                marginTop: 25,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 30,
              }}
            >
              <View>
                <FontAwesome
                  style={{ textAlign: "center", marginBottom: 4 }}
                  name="square"
                  size={24}
                  color="gray"
                />
                <Text style={{ color: colors.text }}>Ghế đã đặt</Text>
              </View>

              <View>
                <FontAwesome
                  style={{ textAlign: "center", marginBottom: 4 }}
                  name="square"
                  size={24}
                  color="#FFD709"
                />
                <Text style={{ color: colors.text }}>Ghế bạn chọn</Text>
              </View>

              <View>
                <FontAwesome
                  style={{ textAlign: "center", marginBottom: 4 }}
                  name="square"
                  size={24}
                  color={colors.text}
                />
                <Text style={{ color: colors.text }}>Ghế trống</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={[
            styles.bottomContainer,
            { backgroundColor: colors.background700 },
          ]}
        >
          <View style={styles.separateContainer}>
            <View style={styles.lineContainer}>
              <Text
                style={{ fontSize: 20, color: colors.text, fontWeight: "bold" }}
              >
                {movieDetail.title}
              </Text>
            </View>
            <View>
              <Text
                style={[styles.textLight, { color: colors.text, marginTop: 5 }]}
              >
                {movieDetail.language}
              </Text>
            </View>
            <Text
              style={[styles.textLight, { color: colors.text, marginTop: 5 }]}
            >
              {selectedSeats.length} ghế
            </Text>
          </View>

          <Text
            style={{
              color: colors.text,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {movieDetail.ageRequired}
          </Text>

          <View
            style={[
              styles.separateContainer,
              {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <View style={styles.lineContainer}>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                {fee.toLocaleString("vi-VN")}đ
              </Text>
            </View>

            <View style={styles.bookButtonContainer}>
              <TouchableOpacity onPress={payButtonHandler}>
                <Text style={styles.bookButtonText}>Đặt vé</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {selectedSeats.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#FF5524",
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{ fontSize: 15, fontWeight: "500", textAlign: "center" }}
          >
            {selectedSeats.length} ghế đã chọn{" "}
            {seatNumbers.map((seatNumber) => (
              <Text>{seatNumber} </Text>
            ))}
          </Text>
        </Pressable>
      ) : (
        <Pressable style={{}}></Pressable>
      )}
    </>
  );
};
export default SeatScreen;

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1E1E1E",
    padding: 0,
    position: "relative",
    flex: 1,
  },

  pickContainer: {
    marginBottom: 8,
  },
  seat: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "white",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    color: "#919191",
    elevation: 4,
    shadowColor: "#C0C0C0",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.75,
  },

  screenText: {
    color: "white",
    paddingBottom: 8,
    fontSize: 15,
  },
  screenContainer: {
    height: 4,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 40,
    elevation: 4,
    shadowOffset: { with: 0, height: 0 },
    shadowOpacity: 1,
    marginBottom: 32,
  },

  selectedSeat: {
    backgroundColor: "#FFD709",
    borderColor: "transparent",
  },

  bottomContainer: {
    height: "12%",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  separateContainer: {
    marginHorizontal: "3%",
    textAlign: "center",
  },

  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLight: {
    fontSize: 15,
    color: "#999999",
    fontWeight: "300",
  },

  bookButtonContainer: {
    borderRadius: 8,
    backgroundColor: "#FF3232",
    padding: 8,
    marginTop: 5,
  },

  bookButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  bookedSeat: {
    backgroundColor: "gray",
    borderColor: "transparent",
  },

  myBooked: {
    backgroundColor: "blue",
    borderColor: "transparent",
  },
});
