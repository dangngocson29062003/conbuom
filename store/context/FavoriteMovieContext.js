import { createContext, useState } from "react";
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});
function FavoritesContextProvider({ children }) {
  const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);
  function addFavorite(id) {
    setFavoriteMovieIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMovieIds((currentFavIds) =>
      currentFavIds.filter((movieID) => movieID !== id)
    );
  }
  const value = {
    ids: favoriteMovieIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
