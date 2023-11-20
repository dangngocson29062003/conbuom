import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { fetchMovies } from "../util/http";
import { useTheme } from "../store/context/ThemeContext";
function SearchFilter({ input, setInput }) {
  const navigation = useNavigation();
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const { colors } = useTheme();
  useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies();
      setFetchedMovies(movies);
    }
    getMovies();
  }, []);
  function renderMovieItem(itemData) {
    const item = itemData.item;
    if (input === "") {
      const movieItemProps = {
        id: item.id,
        poster: item.backdrop,
        title: item.title,
        genres: item.genre,
        rating: item.rating,
        description: item.description,
      };
      const id = item.id;
      return (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("MovieDetails", { id })}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 175,
                  height: 100,
                  marginEnd: 20,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: movieItemProps.poster }}
                  style={{ flex: 1, resizeMode: "cover" }}
                />
              </View>

              <Text
                style={{ width: 125, color: colors.text, fontWeight: "bold" }}
              >
                {movieItemProps.title}
              </Text>
            </View>
            <Ionicons
              name="play-circle-outline"
              color={colors.text}
              size={46}
            />
          </TouchableOpacity>
        </View>
      );
    }
    if (item.title.toLowerCase().includes(input.toLowerCase())) {
      const movieItemProps = {
        id: item.id,
        poster: item.backdrop,
        title: item.title,
        genres: item.genre,
        rating: item.rating,
        description: item.description,
      };
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("MovieDetails", { id })}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 175,
                height: 100,
                marginEnd: 20,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: movieItemProps.poster }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </View>

            <Text style={{ width: 125, color: "white", fontWeight: "bold" }}>
              {movieItemProps.title}
            </Text>
          </View>
          <Ionicons name="play-circle-outline" color={"white"} size={46} />
        </TouchableOpacity>
      );
    }
  }
  return (
    <View style={styles.container}>
      <FlatList data={fetchedMovies} renderItem={renderMovieItem} />
    </View>
  );
}
export default SearchFilter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 50,
  },
});
