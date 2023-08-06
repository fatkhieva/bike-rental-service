import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cases } from "../services/http";

export const CASES_FETCH = "CASES_FETCH";
export const CREATE_CASE = "CREATE_CASE";

const initialState = {
  isSending: false,
  isCreating: false,
  isError: false,
  isSendError: false,
  data: [],
};

export const fetchAllCases = createAsyncThunk(
  CASES_FETCH,
  async () => await Cases.fetch()
);

export const createCase = createAsyncThunk(
  CREATE_CASE,
  async (data) => await Cases.create(data)
);

export const casesSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {
    reset: () => initialState,
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCases.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchAllCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data?.data;
      })
      .addCase(fetchAllCases.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(createCase.pending, (state) => {
        state.isSendError = false;
        state.isSending = true;
      })
      .addCase(createCase.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.isSending = false;
        state.data = [...state.data, action.payload.data?.data];
      })
      .addCase(createCase.rejected, (state) => {
        state.isSendError = true;
        state.isSending = false;
      });
  },
});

export const selectCases = (state) => state.cases;

export const { reset, setError } = casesSlice.actions;

export default casesSlice.reducer;
