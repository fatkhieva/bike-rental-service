import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Officers } from "../services/http";

export const OFFICERS_FETCH = "OFFICERS_FETCH";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const fetchAllOfficers = createAsyncThunk(
  OFFICERS_FETCH,
  async () => await Officers.fetch()
);

export const officersSlice = createSlice({
  name: "officers",
  initialState,
  reducers: {
    reset: () => initialState,
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOfficers.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchAllOfficers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data?.officers;
      })
      .addCase(fetchAllOfficers.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const selectOfficers = (state) => state.officers;

export const { reset, setError } = officersSlice.actions;

export default officersSlice.reducer;
