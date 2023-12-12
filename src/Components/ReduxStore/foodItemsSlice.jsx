import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialFetchState, GetApiCall } from "../../assets/index";

const initialState = {
  fetchState: initialFetchState.INITIAL,
  apiData: {},
};

const foodItemsSlice = createSlice({
  name: "foodItems",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFoodItemsFromApi.fulfilled, (state, action) => {
        state.apiData = action.payload;
        state.fetchState = initialFetchState.SUCCESS;
      })
      .addCase(getFoodItemsFromApi.pending, (state, action) => {
        state.fetchState = initialFetchState.INPROGRESS;
      })
      .addCase(getFoodItemsFromApi.rejected, (state, action) => {
        state.fetchState = initialFetchState.FAILURE;
      });
  },
});

const getFoodItemsFromApi = createAsyncThunk(
  "getFoodItems",
  async (apiValue) => {
    try {
      const apiResponse = await GetApiCall(apiValue);
      return apiResponse;
    } catch (error) {
      throw new Error("Fetch Api Call Fail");
    }
  }
);

export default foodItemsSlice.reducer;
