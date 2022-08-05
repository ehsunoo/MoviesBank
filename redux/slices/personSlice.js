import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  item: {},
  items: [],
  totalPages: "",
};

// prettier-ignore
export const getPerson = createAsyncThunk(
  "person/info",
  async (id) => {
    return await fetch(`${process.env.BASE_URL}/api/person/${id}`).then((res) => res.json());
  }
);

// prettier-ignore
export const getPersonMovies = createAsyncThunk(
  "person/movies",
  async (values) => {
    return await fetch(`${process.env.BASE_URL}/api/person/${values.id}/${values.page}`).then((res) => res.json());
  }
);

const personSlice = createSlice({
  name: "person",
  initialState,
  extraReducers: {
    [getPerson.fulfilled]: (state, action) => {
      state.item = { ...action.payload };
    },
    [getPersonMovies.fulfilled]: (state, action) => {
      state.items = [...action.payload.results];
      state.totalPages = action.payload.total_pages;
    },
  },
});

export default personSlice.reducer;
