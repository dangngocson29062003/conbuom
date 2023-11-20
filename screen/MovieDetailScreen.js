import {
  useState,
  useEffect,
  useCallback,
  useContext,
  useLayoutEffect,
} from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
const { width, height } = Dimensions.get("window");
import YoutubePlayer from "react-native-youtube-iframe";
import { LinearGradient } from "expo-linear-gradient";
import ButtonPlayVideo from "../components/ButtonPlayVideo";
import MovieDetail from "../components/MovieDetail";
import ButtonCustom from "../components/ButtonCustom";
import { FavoritesContext } from "../store/context/FavoriteMovieContext";
import IconButton from "../components/IconButton";
import { fetchMoviesDetail } from "../util/http";
import { useTheme } from "../store/context/ThemeContext";
const timeArray = ["10:30", "12:30", "14:30", "15:00", "19:30", "21:00"];

const generateDate = () => {
  const date = new Date();
  let weekday = [
    "Chủ nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  let weekdays = [];
  for (let i = 0; i < 7; i++) {
    let tempDate = {
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    };
    weekdays.push(tempDate);
  }
  return weekdays;
};

const MovieDetailScreen = ({ route, navigation }) => {
  const favoriteMovieCtx = useContext(FavoritesContext);
  const [dateArray, setDateArray] = useState(generateDate());
  const [selectedDateIndex, setSelectedDateIndex] = useState();
  const [selectedTimeIndex, setSelectedTimeIndex] = useState();
  const [movieDetail, setMovieDetail] = useState([]);
  const { dark, colors } = useTheme();
  const movieId = route.params.id;

  useLayoutEffect(() => {
    async function getMovies() {
      const movie = await fetchMoviesDetail(movieId);
      setMovieDetail(movie);
    }
    getMovies();
  }, []);
  console.log(movieDetail.genre);
  navigation.setOptions({
    title: movieDetail.title,
  });
  const [playing, setPlaying] = useState(false);
  const movieIsFavorite = favoriteMovieCtx.ids.includes(movieId);
  function changeFavoriteStatusHandler() {
    if (movieIsFavorite) {
      favoriteMovieCtx.removeFavorite(movieId);
    } else {
      favoriteMovieCtx.addFavorite(movieId);
    }
  }
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={movieIsFavorite ? "heart" : "heart-outline"}
            color={colors.icon}
            size={32}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width,
            height: height > 800 ? height * 0.35 : height * 0.45,

            position: "relative",
          }}
        >
          <Image
            source={{ uri: movieDetail.poster }}
            style={styles.posterImage}
          />
          <ButtonPlayVideo
            onPress={togglePlaying}
            style={{
              zIndex: 2,
              top: height > 800 ? 150 : 200,
              width,
              flexDirection: "row",
              justifyContent: "center",
            }}
          />

          <LinearGradient
            colors={
              dark
                ? ["rgba(30, 30, 30, 0.2)", "rgba(30, 30, 30, 0.8)"]
                : ["rgba(255, 255, 255, 0.2)", "rgba(30, 20, 30, 0.8)"]
            }
            start={[2, -1]}
            end={[1, 1]}
            style={{
              width: "100%",
              height: height,
              position: "absolute",
            }}
          />
        </View>
        <YoutubePlayer
          play={playing}
          webViewProps={{
            allowsInlineMediaPlayback: false,
            androidLayerType: "hardware",
            androidHardwareAccelerationDisabled: true,
            mixedContentMode: "always",
            javaScriptEnabled: true,
            domStorageEnabled: true,
            startInLoadingState: true,
            originWhitelist: ["*"],
            flex: 1,
          }}
          forceAndroidAutoplay
          onFullScreenChange={true}
          webViewStyle={{
            height: height,
            width,
            opacity: 0,
            position: "absolute",
          }}
          videoId={movieDetail.trailer}
        />
        <MovieDetail
          title={movieDetail.title}
          releaseDate={movieDetail.releaseDate}
          genres={movieDetail.genre}
          ageRequired={movieDetail.ageRequired}
          time={movieDetail.time}
          description={movieDetail.description}
          censorship={movieDetail.censorship}
          language={movieDetail.language}
          director={movieDetail.director}
          actor={movieDetail.actor}
        />

        {movieDetail.status === "Showing" ? (
          <View style={{ marginTop: 20, position: "relative" }}>
            <Text
              style={{
                color: "#FF5524",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 20,
              }}
            >
              Suất chiếu
            </Text>
            <FlatList
              data={dateArray}
              keyExtractor={(item) => item.date}
              horizontal
              bounces={false}
              contentContainerStyle={styles.containerGap24}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={() => setSelectedDateIndex(index)}>
                    <View
                      style={[
                        [
                          styles.dateContainer,
                          { backgroundColor: colors.background700 },
                        ],
                        index == 0
                          ? { marginLeft: 24 }
                          : index == dateArray.length - 1
                          ? { marginRight: 24 }
                          : {},
                        index == selectedDateIndex
                          ? { backgroundColor: "#FF5524" }
                          : {},
                      ]}
                    >
                      <Text style={[styles.dateText, { color: colors.text }]}>
                        {item.date}
                      </Text>
                      <Text style={[styles.dayText, { color: colors.text }]}>
                        {item.day}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
            <View style={styles.outterContainer}>
              <FlatList
                data={timeArray}
                keyExtractor={(item) => item}
                horizontal
                bounces={false}
                contentContainerStyle={styles.containerGap24}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setSelectedTimeIndex(index)}
                    >
                      <View
                        style={[
                          [
                            styles.timeContainer,
                            { backgroundColor: colors.background700 },
                          ],
                          index == 0
                            ? { marginLeft: 24 }
                            : index == dateArray.length - 1
                            ? { marginRight: 24 }
                            : {},
                          index == selectedTimeIndex
                            ? { backgroundColor: "#FF5524" }
                            : {},
                        ]}
                      >
                        <Text style={[styles.timeText, { color: colors.text }]}>
                          {item}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
              <ButtonCustom
                id={movieId}
                date={dateArray[selectedDateIndex]}
                time={timeArray[selectedTimeIndex]}
              >
                Đặt vé
              </ButtonCustom>
            </View>
          </View>
        ) : (
          <Text
            style={{
              color: "#FF5524",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 20,
              fontSize: 16,
            }}
          >
            SẮP DIỄN RA
          </Text>
        )}
      </ScrollView>
    </View>
  );
};
export default MovieDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  posterImage: {
    width: "100%",
    height: height,
    resizeMode: "cover",
    position: "absolute",
  },
  containerGap24: {
    gap: 24,
  },
  dateContainer: {
    width: 70,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 24,
    color: "white",
  },
  dayText: {
    fontSize: 12,
    color: "white",
  },
  outterContainer: {
    marginVertical: 24,
  },
  timeContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.50)",
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#0b0b0b",
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    fontSize: 14,
    color: "white",
  },
});
