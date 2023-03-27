import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../store/store";
import { FetchListResponse } from "../../../../types";
import { Character, Gender } from "../../types";
import { STATE_KEY } from "../index";

export const getCharactersPage = (
  state: RootState
): FetchListResponse<Character> | null => state[STATE_KEY].charactersPage;

export const getFavoriteCharacters = (state: RootState): Character[] =>
  state[STATE_KEY].charactersPage?.results.filter((item) => item.isLiked) || [];

export const getNumberOfFavoriteFemales = createSelector(
  getFavoriteCharacters,
  (characters) =>
    characters &&
    characters.reduce(
      (acc, item) => (item.gender === Gender.FEMALE ? acc + 1 : acc),
      0
    )
);

export const getNumberOfFavoriteMales = createSelector(
  getFavoriteCharacters,
  (characters) =>
    characters &&
    characters.reduce(
      (acc, item) => (item.gender === Gender.MALE ? acc + 1 : acc),
      0
    )
);

export const getNumberOfOtherFavorite = createSelector(
  getFavoriteCharacters,
  (characters) =>
    characters &&
    characters.reduce(
      (acc, item) => (item.gender === Gender.OTHER ? acc + 1 : acc),
      0
    )
);
