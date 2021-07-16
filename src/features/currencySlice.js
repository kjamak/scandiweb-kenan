import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  char: "$",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,

  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload.currency;
      state.char = action.payload.char;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
