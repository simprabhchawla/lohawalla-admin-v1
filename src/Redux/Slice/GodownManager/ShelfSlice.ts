import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllShelfsApi } from '@src/Redux/Api/GodownManager/ShelfApi';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  shelfs: [],
  status: 'idle',

};

export const getShelfsAsync: any = createAsyncThunk('getShelfsAsync', async () => {
  try {
    const data = await AllShelfsApi();
    return data;
  } catch (error) {
    throw error;
  }
});



const ShelfsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShelfsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getShelfsAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getShelfsAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })
  },
});

export default ShelfsSlice.reducer;
