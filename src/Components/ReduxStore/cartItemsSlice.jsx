import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    add: (state, action) => {
      const findIndexOfItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndexOfItem !== -1) {
        state.items[findIndexOfItem].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    inc: (state, action) => {
      const itemToUpdate = state.items.find((each) => each.id === action.payload);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    dec: (state, action) => {
      const itemToUpdate = state.items.find((each) => each.id === action.payload);
      itemToUpdate.quantity -= 1;
      if (itemToUpdate.quantity <= 0) {
        const removeItem = state.items.findIndex(
          (each) => each.id === action.payload
        );
        state.items.splice(removeItem, 1);
      }
    },
    remove: (state) => {
      state.items = [];
    },
  },
});

export const { add, inc, dec, remove } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
