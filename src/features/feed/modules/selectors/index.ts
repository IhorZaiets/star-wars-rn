import { RootState } from "../../../../store/store";
import { FetchListResponse } from "../../../../types";
import { Character } from "../../types";
import { STATE_KEY } from "../index";

export const getCharactersPage = (
  state: RootState
): FetchListResponse<Character> | null => state[STATE_KEY].charactersPage;

export const getFavoriteCharacters = (state: RootState): Character[] =>
  state[STATE_KEY].charactersPage?.results.filter((item) => item.isLiked) || [];
