import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cell } from "../slices/cellsSlice";

const isDevelopment = process.env.NODE_ENV === "development";
const baseUrl = isDevelopment ? "http://localhost:5173" : window.location.href;

export const cellApi = createApi({
  reducerPath: "cellApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCells: builder.query({
      query: () => "/cells",
    }),
    createCells: builder.mutation({
      query: (cells: { cells: Cell[] }) => ({
        url: "/cells",
        method: "POST",
        body: cells,
      }),
    }),
  }),
});

export const { useGetCellsQuery, useCreateCellsMutation } = cellApi;
