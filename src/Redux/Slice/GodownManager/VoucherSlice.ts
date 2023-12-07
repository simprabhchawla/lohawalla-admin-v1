import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVoucherOrderApi } from '@src/Redux/Api/GodownManager/VoucherApi';


const initialState = {
  data: null,
  isLoading: false,
  error: null,
  salesOrder: [],
  status: 'idle',

};

export const getVoucherOrderAsync: any = createAsyncThunk('getVoucherOrderAsync', async (id) => {
  try {
    const data = await getVoucherOrderApi(id);
    return data;
  } catch (error) {
    throw error;
  }
});





const VoucherOrderSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVoucherOrderAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getVoucherOrderAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getVoucherOrderAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

  },
});

export default VoucherOrderSlice.reducer;
