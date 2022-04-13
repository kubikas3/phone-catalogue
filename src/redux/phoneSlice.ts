import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { Phone } from "../types";
import { RootState } from "./store";
import API from "../api";

export interface PhonesState {
  items: Phone[];
  loading: boolean;
  error: string;
}

const initialState: PhonesState = {
  items: [],
  loading: true,
  error: "",
};

export const fetchPhonesAsync = createAsyncThunk(
  "phones/fetchPhones",
  async () => {
    const response = await API.get<Phone[]>("/phones.json");
    return response.data;
  }
);

export const phonesSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhonesAsync.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPhonesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export const selectItems = (state: RootState) => state.phones.items;
export const selectByBrand = createSelector(
  [selectItems, (_: RootState, brand: string) => brand],
  (items, brand) => items.filter((p) => p.brand === brand)
);

export default phonesSlice.reducer;
