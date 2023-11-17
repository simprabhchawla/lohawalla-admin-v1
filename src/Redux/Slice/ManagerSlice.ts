import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllManagerDataApi, addManagerDataApi } from '../Api/ManagerApi';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  manager: [],
  status: 'idle',

};

export const getManagerAsync: any = createAsyncThunk('getManagerAsync', async () => {
  try {
    const data = await AllManagerDataApi();
    return data;
  } catch (error) {
    throw error;
  }
});


export const addManagerDataAsync: any = createAsyncThunk('addVouchers', async (formData) => {
  try {
    // console.log(data)
    return await addManagerDataApi(formData);
  } catch (error: any) {
    console.log("not added", error)
    throw error
  }
});



const ManagerSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getManagerAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getManagerAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })

      .addCase(getManagerAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })


      .addCase(addManagerDataAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addManagerDataAsync.fulfilled, (state) => {
        state.status = 'success';
        state.error = null;
      })
      .addCase(addManagerDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })


  },
});

export default ManagerSlice.reducer;
