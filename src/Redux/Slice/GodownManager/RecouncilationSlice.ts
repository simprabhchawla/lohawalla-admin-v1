import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllRecouncilationApi, RequestRecouncilationApi } from '@src/Redux/Api/GodownManager/Recouncilation';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  recouncilation: [],
  status: 'idle',

};

export const getRecouncilationAsync: any = createAsyncThunk('getRecouncilationAsync', async () => {
  try {
    const data = await AllRecouncilationApi();
    return data;
  } catch (error) {
    throw error;
  }
});


export const requestRecouncilationAsync: any = createAsyncThunk('requestRecouncilationAsync', async (formData) => {
  try {
    const data = await RequestRecouncilationApi(formData);
    return data;
  } catch (error) {
    throw error;
  }
});



const RecouncilationSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecouncilationAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecouncilationAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getRecouncilationAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

      .addCase(requestRecouncilationAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestRecouncilationAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        
        state.data = action.payload;
        state.error = null;
      })
      .addCase(requestRecouncilationAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })


  },
});

export default RecouncilationSlice.reducer;
