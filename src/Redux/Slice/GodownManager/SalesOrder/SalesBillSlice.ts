import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSales } from '@src/Redux/Api/GodownManager/SalesOrder/SalesBillApi';


const initialState = {
  data: null,
  isLoading: false,
  error: null,
  godown: [],
  status: 'idle',

};
export const addSalesAsync: any = createAsyncThunk('addSalesAsync', async (Data) => {
  try {
    const data = await createSales(Data);
    // 
    return data;
    
  } catch (error) {
    throw error;
  }
});
const salesSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addSalesAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(addSalesAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(addSalesAsync.rejected, (state: any, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = action.error.message;
    })

    
    
  },
});

export default salesSlice.reducer;