import { createSlice } from "@reduxjs/toolkit";

export const STATE_KEY = "feed";

export const initialState = {
  number: 0,
};

export const feedSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    increment: (state) => {
      state.number = state.number + 1;
    },
  },
});

const FeedReducer = feedSlice.reducer;

export default FeedReducer;

export const { increment } = feedSlice.actions;
