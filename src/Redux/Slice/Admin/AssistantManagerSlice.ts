import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllAssistantManagerDataApi, addAssistantManagerDataApi, updateAssistantManagerApi } from '@src/Redux/Api/Admin/AssistantManager';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  AssistantManager: [],
  status: 'idle',

};

export const getAssistantManagerAsync: any = createAsyncThunk('getAssistantManagerAsync', async () => {
  try {
    const data = await AllAssistantManagerDataApi();
    return data;
  } catch (error) {
    throw error;
  }
});


export const addAssistantManagerDataAsync: any = createAsyncThunk('addAssistantManagerDataAsync', async (formData) => {
  try {
    return await addAssistantManagerDataApi(formData);
  } catch (error: any) {
    
    throw error
  }
});
export const updateAssistantManagerDataAsync:any = createAsyncThunk('updateAssistantManagerDataAsync', async (editData:any) => {
  try {
    
    return await updateAssistantManagerApi(editData);
  } catch (error: any) {
    
    throw error
  }
});

// export const deleteAssistantManagerAsync: any = createAsyncThunk(
//   "deleteAssistantManagerAsync",
//   async (id) => {
//     try {
//       const response: any = await deleteManagerApi(id);
//       return response.data;
//     } catch (error: any) {
//       console.error("Error deleting godown:", error);
//       throw error;
//     }
//   }
// );




const AssistantManagerSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAssistantManagerAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAssistantManagerAsync.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getAssistantManagerAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

      .addCase(addAssistantManagerDataAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addAssistantManagerDataAsync.fulfilled, (state) => {
        state.status = 'success';
        state.error = null;
      })
      .addCase(addAssistantManagerDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(updateAssistantManagerDataAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateAssistantManagerDataAsync.fulfilled, (state,action) => {
        
        state.data = action.payload;
        state.status = 'success';
        state.error = null;
      })
      .addCase(updateAssistantManagerDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

    //   .addCase(deleteManagerAsync.pending, (state: any) => {
    //     state.status = "loading";
    //   })
    //   .addCase(deleteManagerAsync.fulfilled, (state: any, action: any) => {
    //     state.status = "idle";
    //     state.data = action.payload.data;
    //   })
    //   .addCase(deleteManagerAsync.rejected, (state: any, action: any) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});

export default AssistantManagerSlice.reducer;

