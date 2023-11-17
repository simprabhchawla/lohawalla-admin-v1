import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllVouchersDataApi, addVouchersAPI } from '../Api/customerApi';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  vouchers: [],
  status: 'idle',

};

export const getVouchersAsync: any = createAsyncThunk('getVouchersAsync', async (group) => {
  try {
    const data = await AllVouchersDataApi(group);
    return data;
  } catch (error) {
    throw error;
  }
});

export const addVouchers: any = createAsyncThunk('addVouchers', async (updatedData) => {
  try {
    // console.log(data)
    return await addVouchersAPI(updatedData);
  } catch (error: any) {
    console.log("not added", error)
    throw error
  }
});

// export const updateCustomer: any = createAsyncThunk('updateCustomer', async (editData) => {
//   try {
//     const response = await editCustomerAPI(editData);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// });



// export const deleteCustomerAsync: any = createAsyncThunk(
//   "deleteCustomerAsync",
//   async (id) => {
//     try {
//       const response: any = await deleteCustomerApi(id);
//       return response.data;
//     } catch (error: any) {
//       console.error("Error deleting godown:", error);
//       throw error;
//     }
//   }
// );

const VoucherSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVouchersAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getVouchersAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })

      .addCase(getVouchersAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })


      .addCase(addVouchers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addVouchers.fulfilled, (state) => {
        state.status = 'success';
        state.error = null;
      })
      .addCase(addVouchers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

    //       .addCase(updateCustomer.pending, (state) => {
    //         state.status = 'loading';
    //         state.error = null;
    //       })
    //       .addCase(updateCustomer.fulfilled, (state, action) => {
    //         state.status = 'success';
    //       })
    //       .addCase(updateCustomer.rejected, (state, action) => {
    //         state.status = 'failed';
    //         state.error = action.error.message;
    //       })
    //       .addCase(deleteCustomerAsync.pending, (state: any) => {
    //         state.status = "loading";
    //       })
    //       .addCase(deleteCustomerAsync.fulfilled, (state: any, action: any) => {
    //         state.status = "idle";
    //         state.data = action.payload.data;
    //       })
    //       .addCase(deleteCustomerAsync.rejected, (state: any, action: any) => {
    //         state.status = "failed";
    //         state.error = action.error.message;
    //       });
  },
});

export default VoucherSlice.reducer;
