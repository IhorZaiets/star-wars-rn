import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { FetchListResponse } from "../../../../types";
import { GetCharacterPayload } from "../../../character/types";
import { CharacterFromApi, GetCharactersPayload } from "../../types";

export const feedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  reducerPath: "feedApi",
  endpoints: (builder) => ({
    getCharacters: builder.query<
      FetchListResponse<CharacterFromApi>,
      GetCharactersPayload
    >({
      query: ({ path }) => path,
    }),
    getCharacter: builder.query<CharacterFromApi, GetCharacterPayload>({
      query: ({ characterUrl }) => characterUrl,
    }),
  }),
});

export const { useLazyGetCharactersQuery, useLazyGetCharacterQuery } = feedApi;
