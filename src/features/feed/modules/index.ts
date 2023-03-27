import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      if (state.charactersPage?.results) {
        state.charactersPage.results = state.charactersPage?.results.map(
          (character) =>
            character.url === action.payload
              ? { ...character, isLiked: !character.isLiked }
              : character
        );
      }
    },
    resetLikes: (state) => {
      if (state.charactersPage?.results) {
        state.charactersPage.results = state.charactersPage?.results.map(
          (character) => ({
            ...character,
            isLiked: false,
          })
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      feedApi.endpoints.getCharacters.matchFulfilled,
      (state, { payload }) => {
        const charactersWithLike = payload.results.map((item) => ({
          ...item,
          isLiked: false,
        }));

        // we check if previous page exist to ensure that the received page is not first
        if (state.charactersPage?.results && payload.previous) {
          state.charactersPage = {
            ...payload,
            results: [...state.charactersPage.results, ...charactersWithLike],
          };
        } else {
          state.charactersPage = { ...payload, results: charactersWithLike };
        }
      }
    );
  },
});

const FeedReducer = feedSlice.reducer;

export default FeedReducer;

export const { toggleLike, resetLikes } = feedSlice.actions;
