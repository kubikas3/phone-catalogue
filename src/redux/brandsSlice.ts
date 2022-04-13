import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import API from "../api";
import { Brands } from "../types";

export interface BrandsState {
  data: Brands;
  loading: boolean;
  error: string;
}

const initialState: BrandsState = {
  data: {
    id: "",
    headline: "",
    options: [],
  },
  loading: true,
  error: "",
};

export const fetchBrandsAsync = createAsyncThunk(
  "brands/fetchBrands",
  async () => {
    const response = await API.get<Brands>("/brands.json");
    return response.data;
  }
);

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const selectId = (state: RootState) => state.brands.data.id;
export const selectHeadline = (state: RootState) => state.brands.data.headline;
export const selectOptions = (state: RootState) => state.brands.data.options;

export default brandsSlice.reducer;
