import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { authorType, bookType } from "../db/type";
import routeAPI from "../db/routes.json";

export const sampleApi = createApi({
  reducerPath: "sampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: routeAPI.baseurl }),
  tagTypes: ["Books", "Authors"],
  endpoints: (builder) => ({
    getAuthorByID: builder.query<authorType, string>({
      query: (id) => `authors?id=${id}`,
    }),
    getAllAuthors: builder.query<authorType[], string>({
      query: () => `authors?_embed=books`,
      providesTags: (result, error, id) => [{ type: "Authors", id }],
    }),
    getBookByID: builder.query<authorType, string>({
      query: (id) => `books?id=${id}`,
    }),
    getAllBooks: builder.query<authorType[], string>({
      query: () => `books?_include=authors`,
      providesTags: (result, error, id) => [{ type: "Books", id }],
    }),
    pushABook: builder.mutation<bookType, Partial<bookType>>({
      query: (body) => ({
        url: `books/`,
        method: "post",
        body: body,
      }),
      invalidatesTags: [{ type: "Authors" }],
    }),
    delBook: builder.mutation<bookType, Partial<bookType>>({
      query: ({ id }) => ({
        url: `books/${id}`,
        method: "delete",
      }),
      invalidatesTags: [{ type: "Authors" }],
    }),
  }),
});

export const {
  useGetAllAuthorsQuery,
  useGetAuthorByIDQuery,
  usePushABookMutation,
  useDelBookMutation,
} = sampleApi;
