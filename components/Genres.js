import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../store/context/ThemeContext";

export default function Genres({ genres }) {
  const { colors } = useTheme();
  return (
    <View style={styles.genres}>
      {genres.map((genre, i) => {
        return (
          <View
            key={genre}
            style={[styles.genre, { borderColor: colors.icon }]}
          >
            <Text style={[styles.genreText, { color: colors.text }]}>
              {genre}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  genres: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 4,
  },
  genre: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 14,
    marginRight: 4,
  },
  genreText: {
    fontSize: 9,
  },
});
