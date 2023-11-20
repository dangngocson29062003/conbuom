import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  Animated,
  Text,
} from "react-native";
const { width, height } = Dimensions.get("window");
import TextButton from "../components/TextButton";
import MovieItem from "../components/MovieItem";
import { LinearGradient } from "expo-linear-gradient";
import YoutubePlayer from "react-native-youtube-iframe";
import { fetchMovies } from "../util/http";
import { useTheme } from "../store/context/ThemeContext";

export default function HomeScreen() {
  const { dark, colors } = useTheme();
  const [movies, setMovies] = React.useState([]);
  const [flag, setFlag] = React.useState(1);
  const [fetchedMovies, setFetchedMovies] = React.useState([]);
  React.useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies();
      setFetchedMovies(movies);
      setMovies([...movies.filter((movie) => movie.status === "Showing")]);
    }
    getMovies();
  }, []);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  function renderMovieItem(itemData) {
    const item = itemData.item;
    const movieItemProps = {
      id: item.id,
      poster: item.poster,
      title: item.title,
      genre: item.genre,
      rating: item.rating,
      description: item.description,
    };
    return <MovieItem {...movieItemProps} />;
  }
  function changeMoviesHandler(data) {
    if (data === "Upcoming") {
      setMovies([...fetchedMovies.filter((movie) => movie.status === data)]);
      setFlag(3);
    } else if (data === "HOT") {
      setMovies([
        ...fetchedMovies.filter(
          (movie) => movie.rating >= 7.5 && movie.status === "Showing"
        ),
      ]);
      setFlag(2);
    } else {
      setMovies([...fetchedMovies.filter((movie) => movie.status === data)]);
      setFlag(1);
    }
  }
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.headerOuterContainer}>
          <View style={styles.headerContainer}>
            <TextButton
              style={flag === 1 ? styles.textWhite : styles.textGray}
              onPress={changeMoviesHandler.bind(this, "Showing")}
            >
              Đang chiếu
            </TextButton>
            <TextButton
              style={flag === 2 ? styles.textWhite : styles.textGray}
              onPress={changeMoviesHandler.bind(this, "HOT")}
            >
              HOT
            </TextButton>
            <TextButton
              style={flag === 3 ? styles.textWhite : styles.textGray}
              onPress={changeMoviesHandler.bind(this, "Upcoming")}
            >
              Sắp chiếu
            </TextButton>
          </View>
        </View>
        <View style={{ height: height }}>
          <View style={StyleSheet.absoluteFillObject}>
            {movies.map((item, index) => {
              const opacity = scrollX.interpolate({
                inputRange: [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ],
                outputRange: [0, 1, 0],
              });
              return (
                <Animated.Image
                  key={index}
                  source={{ uri: item.poster }}
                  style={[StyleSheet.absoluteFillObject, { opacity }]}
                />
              );
            })}
            <LinearGradient
              colors={
                dark
                  ? ["rgba(30, 30, 30, 0.2)", "rgba(30, 30, 30, 0.8)"]
                  : ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.2)"]
              }
              style={{
                flex: 1,
              }}
            />
          </View>
          <Animated.FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            renderItem={renderMovieItem}
            pagingEnabled
            horizontal
          />
        </View>
        <View
          style={{
            width,
            marginTop: 20,
            flexDirection: "column",
            justifyContent: "center",
            paddingVertical: 20,
            marginBottom: 100,
            backgroundColor: colors.background700,
          }}
        >
          <Text
            style={[styles.textWhite, { marginBottom: 20, color: colors.text }]}
          >
            Video
          </Text>
          <FlatList
            data={fetchedMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => {
              return (
                <View style={styles.videoContainer}>
                  <YoutubePlayer
                    width={300}
                    height={170}
                    webViewStyle={{
                      width: 300,
                      height: 170,
                      alignSelf: "center",
                      borderRadius: 20,
                      marginBottom: 10,
                    }}
                    videoId={item.item.trailer}
                  />
                  <Text
                    style={[
                      styles.textWhite,
                      { color: colors.text, width: 300 },
                    ]}
                  >
                    {item.item.title} TRAILER | Khởi chiếu:{" "}
                    {item.item.releaseDate}
                  </Text>
                </View>
              );
            }}
            horizontal
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerOuterContainer: {
    position: "absolute",
    top: height > 800 ? 100 : 80,
    zIndex: 1,

    width,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 32,
    color: "white",
    position: "absolute",
  },
  videoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  textWhite: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 14,
  },
  textGray: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ccc",
    letterSpacing: 1,
  },
});
