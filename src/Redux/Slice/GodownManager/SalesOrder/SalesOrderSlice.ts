import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSalesOrderApiPath, getSingleSalesOrder, updateSingleSalesOrder } from '@src/Redux/Api/GodownManager/SalesOrder/SalesApi';

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

export const getSingleSalesOrderAsync: any = createAsyncThunk('getSingleSalesOrderAsync', async (id) => {
  try {
    const data = await getSingleSalesOrder(id);
    // console.log("Slicessss",data)
    return data;
    
  } catch (error) {
    throw error;
  }
});


export const updateSingleSalesOrderAsync: any = createAsyncThunk('updateSingleSalesOrderAsync', async (salesOrder) => {
  try {
    const data = await updateSingleSalesOrder(salesOrder);
    // console.log("Slice",data)
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
        console.log("slices",action.payload)
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getSalesOrderAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

      .addCase(getSingleSalesOrderAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSingleSalesOrderAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("single wala",action.payload)
        state.data = action.payload.salesOrder;
        state.error = null;
      })
      .addCase(getSingleSalesOrderAsync.rejected, (state: any, action) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

      
    .addCase(updateSingleSalesOrderAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(updateSingleSalesOrderAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("update single",action.payload)
      state.data = action.payload;
      state.error = null;
    })
    .addCase(updateSingleSalesOrderAsync.rejected, (state: any, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = action.error.message;
    })
  

  },
});

export default SalesOrderSlice.reducer;
