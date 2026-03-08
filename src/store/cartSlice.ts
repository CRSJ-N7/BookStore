import { createSlice } from "@reduxjs/toolkit";
import type { Book } from "../types/types";

type CartState = {
  cart: Book[];
};

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },

    addToCart(state, action) {
      state.cart.push(action.payload);
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((book) => book.id !== action.payload);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
