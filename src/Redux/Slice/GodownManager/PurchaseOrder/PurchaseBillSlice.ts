import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createPurchaseBill,  getPurchaseByOrderDataApi } from '@src/Redux/Api/GodownManager/PurchaseOrder/purchaseBillApi';
import { createSales } from '@src/Redux/Api/GodownManager/SalesOrder/SalesBillApi';


const initialState = {
  data: null,
  isLoading: false,
  error: null,
  godown: [],
  status: 'idle',

};
export const createPurchaseBillAsync: any = createAsyncThunk('createPurchaseBillAsync', async (Data) => {
  try {
    const data = await createPurchaseBill(Data);
    // console.log("Slice",data)
    return data;
    
  } catch (error) {
    throw error;
  }
});




export const getPurchaseOrderDataAsync: any = createAsyncThunk('getSalesOrderAsync', async (id) => {
  try {
    const data = await getPurchaseByOrderDataApi(id);
    console.log("Slicessss",data)
    return data;
    
  } catch (error) {
    throw error;
  }
});


const PurchaseBillSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createPurchaseBillAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(createPurchaseBillAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(createPurchaseBillAsync.rejected, (state: any, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = action.error.message;
    })

    .addCase(getPurchaseOrderDataAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getPurchaseOrderDataAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("slslsls",action.payload)
      state.godown = action.payload;
      state.error = null;
    })
    .addCase(getPurchaseOrderDataAsync.rejected, (state: any, action) => {
      state.isLoading = false;
      state.godown = null;
      state.error = action.error.message;
    })

    
  },
});

export default PurchaseBillSlice.reducer;