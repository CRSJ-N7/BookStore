import { createSlice } from "@reduxjs/toolkit";
import type { Book } from "../types/types";

type CartState = {
  cart: Book[];
  totalPrice: number | null;
  totalItems: number | null;
};

const initialState: CartState = {
  cart: [],
  totalPrice: null,
  totalItems: null,
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
    setTotalItems(state, action) {
      state.totalItems = action.payload;
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearCart, setTotalItems } =
  cartSlice.actions;

export default cartSlice.reducer;
