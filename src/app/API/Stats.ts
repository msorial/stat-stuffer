import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statsApi = createApi({
  reducerPath: "statsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.balldontlie.io/api/v1/players/",
  }),
  endpoints: (builder) => ({
    getPlayerById: builder.query({
      query: (name) => `?search=${name}`,
    }),
  }),
});

export const { useGetPlayerByIdQuery } = statsApi;
