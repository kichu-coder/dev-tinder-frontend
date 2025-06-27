import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    addRequest: (state, action) => {
      
      return action.payload;
    },
    removeRequest: (state, action) => {
      return state.filter((request) => request._id !== action.payload)
    },
    extraReducers: (builder) => {
      builder.addCase(logout, () => initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRequest , removeRequest} = requestSlice.actions;

export default requestSlice.reducer;
