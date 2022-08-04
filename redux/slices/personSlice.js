import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  item: {},
};

// prettier-ignore
export const getPerson = createAsyncThunk(
  "person/info",
  async (id) => {
    return await fetch(`${process.env.BASE_URL}/api/person/${id}`).then((res) => res.json());
  }
);

const personSlice = createSlice({
  name: "person",
  initialState,
  extraReducers: {
    [getPerson.fulfilled]: (state, action) => {
      state.item = { ...action.payload };
    },
  },
});

export default personSlice.reducer;
