import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bundler from "../../bundler";

interface Bundle {
  loading: boolean;
  code: string;
  err: string;
}

export interface BundlesState {
  [cellId: string]: Bundle | undefined;
}

const initialState: BundlesState = {};

export const createBundle = createAsyncThunk(
  "bundles/create",
  async ({ cellId, rawCode }: { cellId: string; rawCode: string }) => {
    cellId;
    return await bundler(rawCode);
  },
);

const bundlesSlice = createSlice({
  name: "bundles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createBundle.pending, (state, action) => {
      try {
        const { cellId } = action.meta.arg;
        state[cellId] = {
          loading: true,
          code: "",
          err: "",
        };
      } catch {
        console.log("here");
      }
    });
    builder.addCase(createBundle.fulfilled, (state, action) => {
      const { cellId } = action.meta.arg;
      state[cellId] = {
        loading: false,
        code: action.payload.code,
        err: action.payload.err,
      };
    });
    builder.addCase(createBundle.rejected, (state, action) => {
      const { cellId } = action.meta.arg;
      state[cellId] = {
        loading: false,
        code: "",
        err: action.error.message || "An unexpected error occurred...",
      };
    });
  },
});

export const bundlesReducer = bundlesSlice.reducer;
export { createBundle as bundleCode };
