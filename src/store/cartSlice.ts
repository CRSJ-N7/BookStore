import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../types/types";

type CartState = {
  items: Book[];
  totalPrice: number;
  totalItems: number;
};

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<CartState>) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalItems = action.payload.totalItems;
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
