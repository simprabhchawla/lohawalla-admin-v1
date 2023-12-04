import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllRatioDataApi, addRatioDataApi } from '@src/Redux/Api/Admin/ratioApi';


const initialState = {
  data: null,
  isLoading: false,
  error: null,
  manager: [],
  status: 'idle',

};

export const getRatioAsync: any = createAsyncThunk('getRatioAsync', async () => {
  try {
    const data = await AllRatioDataApi();
    return data;
  } catch (error) {
    throw error;
  }
});


export const addRatioDataAsync: any = createAsyncThunk('addRatioDataAsync', async (formData) => {
  try {
    // console.log(data)
    return await addRatioDataApi(formData);
  } catch (error: any) {
    console.log("not added", error)
    throw error
  }
});







const RatioSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRatioAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRatioAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getRatioAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

      .addCase(addRatioDataAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addRatioDataAsync.fulfilled, (state) => {
        state.status = 'success';
        state.error = null;
      })
      .addCase(addRatioDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      
  },
});

export default RatioSlice.reducer;

