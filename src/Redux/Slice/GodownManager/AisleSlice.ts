import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllAisleApi,AddAisleApi } from '@src/Redux/Api/GodownManager/AisleApi';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  aisle: [],
  status: 'idle',

};

export const getAisleAsync: any = createAsyncThunk('getAisleAsync', async (shelfCode) => {
  try {
    const data = await AllAisleApi(shelfCode);
    return data;
  } catch (error) {
    throw error;
  }
});


export const addAisleApiAsync: any = createAsyncThunk('addAisleApiAsync', async (aisles) => {
  try {
    const data = await AddAisleApi(aisles);
    return data;
  } catch (error) {
    throw error;
  }
});



const AisleSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAisleAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAisleAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getAisleAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })
      .addCase(addAisleApiAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addAisleApiAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(addAisleApiAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

  },
});

export default AisleSlice.reducer;
