import { createSlice } from "@reduxjs/toolkit";

import { FetchListResponse } from "../../../types";
import { Character } from "../types";

import { feedApi } from "./api";

export const STATE_KEY = "feed";

interface AppState {
  charactersPage: FetchListResponse<Character> | null;
}

export const initialState: AppState = {
  charactersPage: null,
};

export const feedSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      feedApi.endpoints.getCharacters.matchFulfilled,
      (state, { payload }) => {
        if (state.charactersPage?.results) {
          state.charactersPage = {
            ...payload,
            results: [...state.charactersPage.results, ...payload.results],
          };
        } else {
          state.charactersPage = payload;
        }
      }
    );
  },
});

const FeedReducer = feedSlice.reducer;

export default FeedReducer;
