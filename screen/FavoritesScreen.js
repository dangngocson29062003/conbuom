import { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { FavoritesContext } from "../store/context/FavoriteMovieContext";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { fetchMovies } from "../util/http";
import { useTheme } from "../store/context/ThemeContext";
function FavoritesScreen() {
  const navigation = useNavigation();
  const favoriteMovieCtx = useContext(FavoritesContext);
  const { colors } = useTheme();
  const [fetchedMovies, setFetchedMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies();
      setFetchedMovies(movies);
    }
    getMovies();
  }, []);
  const favoriteMovie = fetchedMovies.filter((movie) =>
    favoriteMovieCtx.ids.includes(movie.id)
  );
  console.log(fetchedMovies);
  function renderMovieItem(itemData) {
    const item = itemData.item;
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
          <Ionicons name="play-circle-outline" color={colors.text} size={46} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList data={favoriteMovie} renderItem={renderMovieItem} />
    </View>
  );
}
export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
});
