import { RootState } from './store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const selectItems = (state: RootState) => state.favorite;
export const { addItem, removeItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
