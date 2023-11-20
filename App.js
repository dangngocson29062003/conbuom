import React from "react";

import { ThemeProvider } from "./store/context/ThemeContext";
import AppNavigation from "./navigations/AppNavigation";
import AuthContextProvider from "./store/context/AuthContext";
import TicketContextProvider from "./store/context/TicketContext";
import FavoritesContextProvider from "./store/context/FavoriteMovieContext";
export default function App() {
  return (
    <FavoritesContextProvider>
      <TicketContextProvider>
        <AuthContextProvider>
          <ThemeProvider>
            <AppNavigation />
          </ThemeProvider>
        </AuthContextProvider>
      </TicketContextProvider>
    </FavoritesContextProvider>
  );
}
