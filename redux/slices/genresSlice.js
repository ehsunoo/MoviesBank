import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  items: [],
  isLoading: true,
};

// prettier-ignore
export const getGenres = createAsyncThunk(
  "genres/list",
  async () => {
    return await fetch(`${process.env.BASE_URL}/api/genres/getGenres`).then(res => res.json())
  }
)

// prettier-ignore
export const getGenre = createAsyncThunk(
  "genres/items",
  async (values) => {
    return await fetch(`${process.env.BASE_URL}/api/genres/${values.id}/${values.page}`).then(res=>res.json())
  }
)

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: {
    [getGenres.fulfilled]: (state, action) => {
      state.list = action.payload.genres;
    },
    [getGenre.fulfilled]: (state, action) => {
      state.items = action.payload.results;
    },
  },
});

export default genresSlice.reducer;
