import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AllItemApi,
  AllRatioDataApi,
  AllUnitApi,
  addRatioDataApi,
} from "@src/Redux/Api/Admin/ratioApi";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  ratio: [],
  units: [],
  items: [],
  status: "idle",
};

export const getRatioAsync: any = createAsyncThunk(
  "getRatioAsync",
  async () => {
    try {
      const data = await AllRatioDataApi();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const getUnitAsync: any = createAsyncThunk("getUnitAsync", async () => {
  try {
    const data = await AllUnitApi();
    return data;
  } catch (error) {
    throw error;
  }
});

export const getItemAsync: any = createAsyncThunk("getItemAsync", async () => {
  try {
    const data = await AllItemApi();
    return data;
  } catch (error) {
    throw error;
  }
});

export const addRatioDataAsync: any = createAsyncThunk(
  "addRatioDataAsync",
  async (formData) => {
    try {
      // console.log(data)
      return await addRatioDataApi(formData);
    } catch (error: any) {
      console.log("not added", error);
      throw error;
    }
  }
);

const RatioSlice = createSlice({
  name: "data",
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
        state.ratio = action.payload.rationCreation;
        state.error = null;
      })
      .addCase(getRatioAsync.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      })

      .addCase(addRatioDataAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addRatioDataAsync.fulfilled, (state) => {
        state.status = "success";
        state.error = null;
      })
      .addCase(addRatioDataAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUnitAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUnitAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.units = action.payload;
        state.error = null;
      })
      .addCase(getUnitAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getItemAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getItemAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getItemAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default RatioSlice.reducer;
