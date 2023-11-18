import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  AllGodownDataApi, addGodownAPI, deleteGodownApi, editGodownAPI } from '../Api/godownApi';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  godown: [],
  status: 'idle',

};

export const fetchGodownData: any = createAsyncThunk('godown/fetchGodownData', async () => {
  try {
    const data = await AllGodownDataApi();
    return data;
  } catch (error) {
    throw error;
  }
});

export const addGodown:any = createAsyncThunk('sales/addGodown', async (godownData) => {
  try {
    // console.log(godownData)
    return await addGodownAPI(godownData);
  } catch (error:any) {
    console.log("not added",error)
    throw error
  }
});

export const updateGodown:any = createAsyncThunk('updateGodown', async ( editData) => {
  try {
    const response = await editGodownAPI(editData);
    return response;
  } catch (error) {
    throw error;
  }
});



export const deleteGodownAsync: any = createAsyncThunk(
  "deleteGodownAsync",
  async (id) => {
    try {
      const response: any = await deleteGodownApi(id);
      return response.data; 
    } catch (error: any) {
      console.error("Error deleting godown:", error);
      throw error; 
    }
  }
);

const godownSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGodownData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGodownData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.error = null;
      })
      .addCase(fetchGodownData.rejected, (state: any, action) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })


      .addCase(addGodown.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(addGodown.fulfilled, (state) => {
        state.status = 'success';
        state.error = null;
      })
      .addCase(addGodown.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        // console.error('Error adding godown:', action.error.message);
      })

      .addCase(updateGodown.pending, (state:any) => {
        state.loading = 'pending';
      })
      .addCase(updateGodown.fulfilled, (state:any, action) => {
        state.loading = 'succeeded';
        state.data = action.payload.data;
      })
      .addCase(updateGodown.rejected, (state:any, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteGodownAsync.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(deleteGodownAsync.fulfilled, (state: any, action: any) => {
        state.status = "idle";
        state.data = action.payload.data;
      })
      .addCase(deleteGodownAsync.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default godownSlice.reducer;
