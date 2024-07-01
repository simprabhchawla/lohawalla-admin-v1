import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPurchaseOrderApiPath, getSInglePurchaseOrderApiPath, updateSinglePurchaseOrder } from '@src/Redux/Api/GodownManager/PurchaseOrder/PurchaseOrderApi';

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


export const getSinglePurchaseOrderAsync: any = createAsyncThunk('getSinglePurchaseOrderAsync', async (id) => {
  try {
    const data = await getSInglePurchaseOrderApiPath(id);
    return data;
  } catch (error) {
    throw error;
  }
});


export const updateSinglePurchaseOrderAsync: any = createAsyncThunk('updateSinglePurchaseOrderAsync', async (purchaseOrder) => {
  try {
    const data = await updateSinglePurchaseOrder(purchaseOrder);
    // 
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
      .addCase(getSinglePurchaseOrderAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSinglePurchaseOrderAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        
        state.data = action.payload; 
        state.error = null;
      })
      .addCase(getSinglePurchaseOrderAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })
            
    .addCase(updateSinglePurchaseOrderAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(updateSinglePurchaseOrderAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      
      state.data = action.payload;
      state.error = null;
    })
    .addCase(updateSinglePurchaseOrderAsync.rejected, (state: any, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = action.error.message;
    })
  },
});

export default purchaseOrderSlice.reducer;

