import { createSlice, nanoid } from "@reduxjs/toolkit/react";
import { cellApi } from "..";

type CellTypes = "code" | "markdown" | "diagram";

type Directions = "up" | "down";

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}

export interface CellsState {
  order: string[];
  data: {
    [cellId: string]: Cell;
  };
  dataChanged: boolean;
}

interface MoveCellAction {
  type: string;
  payload: {
    id: string;
    direction: Directions;
  };
}

interface DeleteCellAction {
  type: string;
  payload: string;
}

interface InsertCellAfterAction {
  type: string;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

interface UpdateCellAction {
  type: string;
  payload: {
    id: string;
    content: string;
  };
}

const initialState: CellsState = {
  data: {},
  order: [],
  dataChanged: false,
};

const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    insertCellAfter: (state: CellsState, action: InsertCellAfterAction) => {
      const { type, id } = action.payload;
      const newCell: Cell = {
        id: nanoid(5),
        type,
        content: "",
      };
      state.data[newCell.id] = newCell;

      const index = state.order.findIndex((cellId) => cellId === id);
      if (index < 0) {
        state.order.unshift(newCell.id);
      } else {
        state.order.splice(index + 1, 0, newCell.id);
      }
      state.dataChanged = true;
    },

    updateCell: (state: CellsState, action: UpdateCellAction) => {
      const { id, content } = action.payload;
      state.data[id].content = content;
      state.dataChanged = true;
    },

    moveCell: (state: CellsState, action: MoveCellAction) => {
      const { direction, id } = action.payload;
      const index = state.order.findIndex((cellId) => cellId === id);
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return;
      }
      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = id;
      state.dataChanged = true;
    },

    deleteCell: (state: CellsState, action: DeleteCellAction) => {
      const id = action.payload;
      delete state.data[id];
      state.order = state.order.filter((cellId) => cellId !== id);
      state.dataChanged = true;
    },

    dataSaved: (state: CellsState) => {
      state.dataChanged = false;
    }
  },
  extraReducers(builder) {
    builder.addMatcher(
      cellApi.endpoints.getCells.matchFulfilled,
      (state, action) => {
        state.data = action.payload.reduce((acc: CellsState["data"], cell: Cell) => {
          acc[cell.id] = cell;
          return acc;
        }, {} as CellsState["data"]);
        state.order = action.payload.map((cell: Cell) => cell.id);
      }
    );
  },
});

export const { moveCell, deleteCell, insertCellAfter, updateCell, dataSaved } =
  cellsSlice.actions;
export const cellsReducer = cellsSlice.reducer;
