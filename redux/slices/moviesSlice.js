import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  items: [],
  recommendations: [],
  isLoading: false,
};

// prettier-ignore
export const getPopular = createAsyncThunk(
  "movies/popular", 
  async (page) => {
    return await fetch(`${process.env.BASE_URL}/api/movies/popular/${page}`).then(res => res.json());
  }
)

// prettier-ignore
export const getTopRated = createAsyncThunk(
  "movies/topRated",
  async (page) => {
    return await fetch(`${process.env.BASE_URL}/api/movies/top-rated/${page}`).then(res => res.json())
  }
)

// prettier-ignore
export const getUpcoming = createAsyncThunk(
  "movies/upcoming",
  async (page) => {
    return await fetch(`${process.env.BASE_URL}/api/movies/upcoming/${page}`).then(res => res.json())
  }
)

// prettier-ignore
export const getRecommendations = createAsyncThunk(
  "movies/recommendations",
  async (id) => {
    return await fetch(`${process.env.BASE_URL}/api/movies/recommendations/${id}`).then(res => res.json())
  }
)

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getPopular.fulfilled]: (state, action) => {
      state.items = [...action.payload.results];
    },
    [getTopRated.fulfilled]: (state, action) => {
      state.items = [...action.payload.results];
      state.isLoading = false;
    },
    [getUpcoming.fulfilled]: (state, action) => {
      state.items = [...action.payload.results];
    },
    [getRecommendations.fulfilled]: (state, action) => {
      state.recommendations = [...action.payload.results];
    },
  },
});

export const { cleanUpItems, cleanUpRecommendations } = moviesSlice.actions;

export default moviesSlice.reducer;
