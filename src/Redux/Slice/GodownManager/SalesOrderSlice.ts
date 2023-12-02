import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSalesOrderApiPath } from '@src/Redux/Api/GodownManager/SalesApi';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  salesOrder: [],
  status: 'idle',

};

export const getSalesOrderAsync: any = createAsyncThunk('getSalesOrderAsync', async () => {
  try {
    const data = await getSalesOrderApiPath();
    return data;
  } catch (error) {
    throw error;
  }
});





const SalesOrderSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSalesOrderAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSalesOrderAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getSalesOrderAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

  },
});

export default SalesOrderSlice.reducer;
