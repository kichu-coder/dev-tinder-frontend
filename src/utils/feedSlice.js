import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      return state.filter((user) => user._id !== action.payload);
    },
    extraReducers: (builder) => {
      builder.addCase(logout, () => initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFeed , removeFeed} = feedSlice.actions;

export default feedSlice.reducer;
