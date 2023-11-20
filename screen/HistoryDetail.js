import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import { useTheme } from "../store/context/ThemeContext";
import { useContext, useLayoutEffect, useState } from "react";
import { TicketContext } from "../store/context/TicketContext";
import QRCode from "react-native-qrcode-svg";
import { AuthContext } from "../store/context/AuthContext";
import { getBill } from "../util/bill";
function HistoryDetail({ route, navigation }) {
  const { colors } = useTheme();
  const authCtx = useContext(AuthContext);
  const item = route.params.movieData;
  const [data, setData] = useState(item);
  const ticketCtx = useContext(TicketContext);
  useLayoutEffect(() => {
    async function getData() {
      const response = await getBill(authCtx.data.email);
      response.map((data) => {
        if (data.billID === item.billID) {
          setData(data);
        }
      });
    }
    getData();
    if (data.status === true) {
      item.status = data.status;
    } else {
      item.status = data.status;
    }
  }, [getBill(authCtx.data.email)]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ticketContainer}>
        <View style={styles.ticketHeader}>
          <View style={{ flexDirection: "row", padding: 15 }}>
            <View>
              <ImageBackground
                source={{ uri: item.moviePoster }}
                style={styles.imgPoster}
              ></ImageBackground>
            </View>
            <Text
              style={{
                marginLeft: 18,
                fontWeight: "bold",
                fontSize: 18,
                justifyContent: "center",
              }}
            >
              {item.movieDetail}
            </Text>
          </View>

          <ImageBackground
            source={{ uri: item.movieBackdrop }}
            style={styles.ticketBGImage}
          ></ImageBackground>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 8,
            }}
          >
            <View style={{}}>
              <Text>Mã đặt vé: </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 5 }}
              >
                {item.billID}
              </Text>
              <Text>Thời gian:</Text>
              <Text style={[styles.textBold, { paddingBottom: 5 }]}>
                {item.time}
              </Text>
              <Text style={[styles.textBold, { color: "orange" }]}>
                {item.day}, {item.date}
              </Text>
              <View style={{ marginTop: 25 }}>
                <Text
                  style={{
                    opacity: 0.5,
                    alignSelf: "center",
                    paddingBottom: 25,
                  }}
                >
                  Đưa mã này cho nhân viên soát để vào rạp
                </Text>
              </View>
            </View>

            <View style={{ justifyContent: "center", marginBottom: 5 }}>
              {item.status ? (
                <Text>Đã sử dụng</Text>
              ) : (
                <QRCode value={`${item.billID}`} size={50} />
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            borderRadius: 1,
            width: "98%",
            borderStyle: "dashed",
            borderWidth: 1,
            borderColor: colors.background,
            backgroundColor: "black",
            marginVertical: 2,
            alignSelf: "center",
          }}
        ></View>

        <View style={styles.ticketFooter}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.subtitle}>Phòng chiếu</Text>
              <Text style={styles.subitem}> {item.room} </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Số vé</Text>
              <Text style={styles.subitem}>{item.numberOfSeats}</Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Số ghế</Text>
              <Text style={styles.subitem}>{item.selectedSeats + " "}</Text>
            </View>
          </View>
        </View>
        <View style={styles.total}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.subtitle}>Tổng tiền</Text>
            <Text style={{ fontWeight: "bold", fontSize: 26 }}>
              {item.total.toLocaleString("vi-VN")}đ
            </Text>
          </View>

          <View style={styles.huhu}>
            <Text style={styles.subtitle}>Mã giao dịch</Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 17, color: "#1E90FF" }}
            >
              4637372892
            </Text>
          </View>

          <View style={styles.huhu}>
            <Text style={styles.subtitle}>Thời gian giao dịch</Text>
            <Text style={{}}>{item.createAt}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default HistoryDetail;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  appHeaderContainer: {
    marginHorizontal: 36,
    marginTop: 20 * 2,
  },
  imgPoster: {
    width: 30,
    height: 30,
    borderRadius: 10,
    overflow: "hidden",
  },
  ticketContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  ticketHeader: {
    borderRadius: 10,
    backgroundColor: "#FFF5EE",
  },

  ticketBGImage: {
    alignSelf: "center",
    width: "100%",
    height: 200,

    overflow: "hidden",
    justifyContent: "flex-end",
  },

  ticketFooter: {
    shadowOpacity: 0.25,

    elavation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingBottom: 36,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 10,
  },
  ticketDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  ticketSeatContainer: {
    gap: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  dateTitle: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
  },
  subitem: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    alignItems: "center",
  },
  clockIcon: {
    paddingBottom: 10,
  },
  barcodeImage: {
    height: 50,
    aspectRatio: 158 / 52,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 18,
  },
  huhu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  total: {
    backgroundColor: "#DCDCDC",
    padding: 10,
    shadowOpacity: 0.25,

    elavation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
