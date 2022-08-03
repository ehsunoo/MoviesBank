import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  item: {},
  cast: [],
  isLoading: true,
};

//prettier-ignore
export const getMovie = createAsyncThunk(
  "movie/detail", 
  async (id) => {
    return await fetch(`${process.env.BASE_URL}/api/movie/${id}`).then(res => res.json());
  }
);

//prettier-ignore
export const getCast = createAsyncThunk(
  "movie/cast",
  async (id) => {
    return await fetch(`${process.env.BASE_URL}/api/movie/credits/${id}`).then(res => res.json());
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    },
    [getCast.fulfilled]: (state, action) => {
      state.cast = action.payload.cast;
    },
  },
});

export default movieSlice.reducer;
