import { configureStore } from "@reduxjs/toolkit";
import foodItemsSlice from "./foodItemsSlice";
import cartItemsSlice from "./cartItemsSlice";

const store = configureStore({
  reducer: {
    foodItems: foodItemsSlice,
    cart: cartItemsSlice,
  },
});

export default store;
