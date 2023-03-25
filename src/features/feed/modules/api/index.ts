import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const feedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  reducerPath: "feedApi",
  endpoints: (builder) => ({
    getWarior: builder.query<string, void>({
      query: () => "people/10",
    }),
  }),
});

export const { useLazyGetWariorQuery } = feedApi;
