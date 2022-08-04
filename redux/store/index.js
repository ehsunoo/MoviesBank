import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// Slices
import moviesReducer from "../slices/moviesSlice";
import movieReducer from "../slices/movieSlice";
import genresReducer from "../slices/genresSlice";
import searchReducer from "../slices/searchSlice";
import personReducer from "../slices/personSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      movies: moviesReducer,
      movie: movieReducer,
      genres: genresReducer,
      search: searchReducer,
      person: personReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
