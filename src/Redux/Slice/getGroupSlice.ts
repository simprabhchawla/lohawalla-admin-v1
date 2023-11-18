import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllGroupsDataApi } from '../Api/customerApi';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  groups: [],
  status: 'idle',

};

export const getGroupsAsync: any = createAsyncThunk('getGroupsAsync', async () => {
  try {
    const data = await AllGroupsDataApi();
    return data;
  } catch (error) {
    throw error;
  }
});




const groupsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroupsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getGroupsAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })

      .addCase(getGroupsAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })



  },
});

export default groupsSlice.reducer;
