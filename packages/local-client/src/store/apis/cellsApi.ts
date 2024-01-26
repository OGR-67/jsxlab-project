import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cell } from "../slices/cellsSlice";

export const cellApi = createApi({
    reducerPath: "cellApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4005" }),
    endpoints: (builder) => ({
        getCells: builder.query({
            query: () => "/cells",
        }),
        createCells: builder.mutation({
            query: (cells: { cells: Cell[]; }) => ({
                url: "/cells",
                method: "POST",
                body: cells,
            }),
        }),
    }),
});

export const { useGetCellsQuery, useCreateCellsMutation } = cellApi;