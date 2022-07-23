import { configureStore } from "@reduxjs/toolkit";

// Slices
import moviesReducer from "../slices/moviesSlice";
import genresReducer from "../slices/genresSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer,
  },
});
