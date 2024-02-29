import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSalesOrderDataApi } from '@src/Redux/Api/GodownManager/SalesOrder/OrderDataApi';


const initialState = {
  data: null,
  isLoading: false,
  error: null,
  godownData: [],
  status: 'idle',

};


export const getSalesDataAsync: any = createAsyncThunk('getSalesOrderAsync', async (ids) => {
  try {
    const data = await getSalesOrderDataApi(ids);
    // 
    return data;
    
  } catch (error) {
    throw error;
  }
});
const DatasalesSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSalesDataAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSalesDataAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getSalesDataAsync.rejected, (state: any, action) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })
  
  },
});

export default DatasalesSlice.reducer;
