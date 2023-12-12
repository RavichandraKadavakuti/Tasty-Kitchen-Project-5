import { configureStore } from "@reduxjs/toolkit";
import foodItemsSlice from "./foodItemsSlice";

const store = configureStore({
  reducer: {
    foodItems: foodItemsSlice,
  },
});

export default store;
