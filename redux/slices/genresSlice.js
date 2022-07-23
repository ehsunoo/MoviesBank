import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  items: [],
};

// prettier-ignore
export const getGenres = createAsyncThunk(
  "genres/list",
  async () => {
    return await fetch('/api/getGenres').then(res => res.json())
  }
)

// prettier-ignore
export const getGenre = createAsyncThunk(
  "genres/movies",
  async () => {
    return await fetch('/api/getGenre').then(res => res.json())
  }
)

const genresSlice = createSlice({
  name: "genres",
  initialState,
  extraReducers: {
    [getGenres.fulfilled]: (state, action) => {
      state.list.push(...action.payload.genres);
    },
    [getGenre.fulfilled]: (state, action) => {
      state.items.push(...action.payload.results);
    },
  },
});

export default genresSlice.reducer;
