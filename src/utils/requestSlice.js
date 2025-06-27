import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    extraReducers: (builder) => {
      builder.addCase(logout, () => initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRequest } = requestSlice.actions;

export default requestSlice.reducer;
