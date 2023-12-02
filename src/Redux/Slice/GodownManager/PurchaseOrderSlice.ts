import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPurchaseOrderApiPath } from '@src/Redux/Api/GodownManager/PurchaseOrderApi';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  purchaseOrder: [],
  status: 'idle',

};

export const getPurchaseOrderAsync: any = createAsyncThunk('getPurchaseOrderAsync', async () => {
  try {
    const data = await getPurchaseOrderApiPath();
    return data;
  } catch (error) {
    throw error;
  }
});





const purchaseOrderSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPurchaseOrderAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPurchaseOrderAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getPurchaseOrderAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

  },
});

export default purchaseOrderSlice.reducer;
