import { StyleSheet, Dimensions, View, Text } from "react-native";
import Genres from "./Genres";
const { width, height } = Dimensions.get("window");
function MovieDetail({
  title,
  genres,
  description,
  releaseDate,
  language,
  ageRequired,
  time,
  censorship,
  director,
  actor,
}) {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "top",
        alignItems: "center",
        paddingHorizontal: 20,
        width,
      }}
    >
      <View
        style={{
          backgroundColor: "#FF5524",
          borderRadius: 36,
          padding: 10,
          marginBottom: 20,
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          {ageRequired}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Genres genres={genres} />

      <View
        style={{
          width,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.text}>
          <Text style={{ color: "white" }}>Công chiếu: </Text> {releaseDate}
        </Text>

        <Text style={styles.text}>
          <Text style={{ color: "white" }}>Thời lượng: </Text>
          {time}
        </Text>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "justify",
            letterSpacing: 0.5,
          }}
        >
          {" "}
          Mô tả{" "}
        </Text>
        <View style={styles.line}></View>
      </View>
      <Text style={styles.text}>{description}</Text>
      <View
        style={[styles.line, { width: width / 1.65, marginTop: 20 }]}
      ></View>
      <View style={{ width, paddingHorizontal: 20 }}>
        <Text style={styles.text}>
          <Text style={{ color: "white" }}>Kiểm duyệt: </Text> {censorship}
        </Text>
        <Text style={styles.text}>
          <Text style={{ color: "white" }}>Ngôn ngữ: </Text> {language}
        </Text>
        <Text style={styles.text}>
          <Text style={{ color: "white" }}>Đạo diễn: </Text> {director}
        </Text>
        <Text style={styles.text}>
          <Text style={{ color: "white" }}>Diễn viên: </Text> {actor}
        </Text>
      </View>
      <View
        style={[styles.line, { width: width / 1.65, marginTop: 20 }]}
      ></View>
    </View>
  );
}
export default MovieDetail;
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#9D9D9D",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "justify",
    letterSpacing: 0.5,
    marginTop: 20,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: width / 4,
    opacity: 0.5,
  },
});
