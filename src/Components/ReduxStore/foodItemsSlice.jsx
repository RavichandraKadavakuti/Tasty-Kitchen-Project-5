import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialFetchState, GetApiCall } from "../../assets/index";

const initialState = {
  fetchState: initialFetchState.INITIAL,
  apiapiResponse: {},
};

const foodItemsSlice = createSlice({
  name: "foodItems",
  initialState,
  reducers: {
    inc: (state, action) => {
      const itemToUpdate = state.find((item) => item.id === action.payload.id);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    dec: (state, action) => {
      const itemToUpdate = state.find((item) => item.id === action.payload.id);
      if (itemToUpdate && itemToUpdate.quantity > 0) {
        itemToUpdate.quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFoodItemsFromApi.fulfilled, (state, action) => {
        state.apiapiResponse = action.payload;
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

export const getFoodItemsFromApi = createAsyncThunk(
  "getFoodItems",
  async (apiValue) => {
    try {
      const apiResponse = await GetApiCall(apiValue);
      const modifyapiResponse = {
        imageUrl: apiResponse.image_url,
        costForTwo: apiResponse.cost_for_two,
        cuisine: apiResponse.cuisine,
        id: apiResponse.id,
        location: apiResponse.location,
        name: apiResponse.name,
        rating: apiResponse.rating,
        reviewsCount: apiResponse.reviews_count,
        foodItems: apiResponse.food_items.map((each) => ({
          id: each.id,
          imageUrl: each.image_url,
          name: each.name,
          rating: each.rating,
          foodType: each.food_type,
          cost: each.cost,
          quantity: 1,
        })),
      };
      return modifyapiResponse;
    } catch (error) {
      throw new Error("Fetch Api Call Fail");
    }
  }
);

export const { inc, dec } = foodItemsSlice.actions;
export default foodItemsSlice.reducer;
