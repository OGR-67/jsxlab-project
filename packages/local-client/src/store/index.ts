import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  CellsState,
  cellsReducer,
  deleteCell,
  insertCellAfter,
  moveCell,
  updateCell,
  dataSaved,
} from "./slices/cellsSlice";
import {
  BundlesState,
  bundlesReducer,
  createBundle,
} from "./slices/bundlesSlice";
import {
  cellApi,
  useGetCellsQuery as getCellsQuery,
  useCreateCellsMutation as createCellsMutation,
} from "./apis/cellsApi";

export interface RootState {
  cells: CellsState;
  bundles: BundlesState;
}

export const store = configureStore({
  reducer: {
    cells: cellsReducer,
    [cellApi.reducerPath]: cellApi.reducer,
    bundles: bundlesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cellApi.middleware);
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

// Apis
export { cellApi };
export const useGetCellsQuery =
  process.env.NODE_ENV === "development"
    ? () => {
        return { isLoading: false, error: null, data: [] };
      }
    : getCellsQuery;
export const useCreateCellsMutation =
  process.env.NODE_ENV === "development"
    ? () => {
        return [() => {}, { isLoading: false, isError: null, isSuccess: true }];
      }
    : createCellsMutation;

// Slices
export { updateCell, deleteCell, insertCellAfter, moveCell, dataSaved };
export { createBundle };
