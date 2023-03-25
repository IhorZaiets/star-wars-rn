import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { FetchListResponse } from "../../../../types";
import { Character, GetCharactersPayload } from "../../types";

export const feedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  reducerPath: "feedApi",
  endpoints: (builder) => ({
    getCharacters: builder.query<
      FetchListResponse<Character>,
      GetCharactersPayload
    >({
      query: ({ path }) => path,
    }),
  }),
});

export const { useLazyGetCharactersQuery } = feedApi;
