import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPages: "",
};

// prettier-ignore
export const searchMovie = createAsyncThunk(
  "search/movie",
  async (value) => {
    return await fetch(`${process.env.BASE_URL}/api/search/${value.name}/${value.page}`).then((res) => res.json());
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cleanUpItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: {
    [searchMovie.fulfilled]: (state, action) => {
      state.items = [...action.payload.results];
      state.totalPages = action.payload.total_pages;
    },
  },
});

export const { cleanUpItems } = searchSlice.actions;

export default searchSlice.reducer;
