import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTransactions = createAsyncThunk(
  "user/transactions",
  async (service: AxiosResponse) => {
    try {
      const { data: response } = await service.request.get(
        `${API_URL}/some-endpoint`
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

const initialState: any = {
  response: [],
  loading: true,
  error: {},
};

export const transactionSlice = createSlice({
  name: "somedata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTransactions.fulfilled, (state, { payload }) => {
      state.response = payload.data;
      state.loading = false;
    });
    builder.addCase(fetchTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const transactionStateSelector = (state: any) => state.somedata;
export default transactionSlice.reducer;
