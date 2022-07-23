import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// prettier-ignore
export const getPopular = createAsyncThunk(
  "movies/popular",
  async () => {
    return await fetch('/api/getPopularMovies').then(res => res.json())
  }
)

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [getPopular.fulfilled]: (state, action) => {
      state.items.push(...action.payload.results);
    },
  },
});

export default moviesSlice.reducer;
