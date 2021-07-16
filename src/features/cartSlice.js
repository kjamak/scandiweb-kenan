import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const array = [...state.items, action.payload];
      state.items = array.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;

      let newItem = state.items.find((item) => item.id === id);

      newItem = { ...newItem, quantity: newItem.quantity + 1 };

      const otherItems = state.items.filter((item) => item.id !== id);

      const array = [...otherItems, newItem];
      state.items = array.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;

      let newItem = state.items.find((item) => item.id === id);

      newItem = {
        ...newItem,
        quantity: newItem.quantity === 1 ? 1 : newItem.quantity - 1,
      };

      const otherItems = state.items.filter((item) => item.id !== id);
      const array = [...otherItems, newItem];
      state.items = array.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
    removeItem: (state, action) => {
      const id = action.payload;

      const otherItems = state.items.filter((item) => item.id !== id);

      state.items = otherItems.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
  },
});

export const { addToCart, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
