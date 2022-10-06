import { ICard } from "@models/ICard";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FoodApi = createApi({
  reducerPath: "FoodApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://633ab06b471b8c3955727626.mockapi.io" }),
  endpoints: (builder) => ({
    fetchAllFreshFood: builder.query<ICard[], void>({
      query: () => "/products",
    }),
  }),
});
