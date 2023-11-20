import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchFilter from "../components/SearchFilter";
import { useTheme } from "../store/context/ThemeContext";
const { width, height } = Dimensions.get("window");

const SearchScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.searchContainer}>
        <View
          style={[
            styles.contentSearchContainer,
            { backgroundColor: colors.background700 },
          ]}
        >
          <Ionicons
            name="search-outline"
            style={[styles.iconSearch, { color: colors.text }]}
          />
          <TextInput
            placeholder="Tìm kiếm phim"
            placeholderTextColor="gray"
            color={colors.text}
            value={input}
            onChangeText={(text) => setInput(text)}
            style={styles.txtInputSearch}
          />
        </View>
      </View>
      <SearchFilter input={input} setInput={setInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    paddingHorizontal: 20,
  },
  contentSearchContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    borderRadius: 10,
  },
  iconSearch: {
    fontSize: 22,
    opacity: 0.8,
    paddingHorizontal: 20,
  },
  txtInputSearch: {
    width: "75%",
  },
});

export default SearchScreen;
