import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = process.env.REACT_APP_RAPID_API_ARTICLE_KEY;

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coinranking.com/v2/coins",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit = 10) => `?limit=${limit}`,
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
