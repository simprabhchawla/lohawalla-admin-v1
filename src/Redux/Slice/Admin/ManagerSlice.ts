import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllManagerDataApi, addManagerDataApi, deleteManagerApi, updateManagerApi } from '../../Api/Admin/ManagerApi';

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
export const updateManagerDataAsync:any = createAsyncThunk('updateManagerDataAsync', async (editData:any) => {
  try {
    console.log(editData)
    return await updateManagerApi(editData);
  } catch (error: any) {
    console.log("not added", error)
    throw error
  }
});

export const deleteManagerAsync: any = createAsyncThunk(
  "deleteManagerAsync",
  async (id) => {
    try {
      const response: any = await deleteManagerApi(id);
      return response.data;
    } catch (error: any) {
      console.error("Error deleting godown:", error);
      throw error;
    }
  }
);




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

      .addCase(updateManagerDataAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateManagerDataAsync.fulfilled, (state,action) => {
        console.log("hii",action.payload)
        state.data = action.payload;
        state.status = 'success';
        state.error = null;
      })
      .addCase(updateManagerDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(deleteManagerAsync.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(deleteManagerAsync.fulfilled, (state: any, action: any) => {
        state.status = "idle";
        state.data = action.payload.data;
      })
      .addCase(deleteManagerAsync.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ManagerSlice.reducer;

