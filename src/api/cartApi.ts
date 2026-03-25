import type { Book, User } from "../types/types";
import { api } from "./api";

type GetCartResponse = {
  items: Book[];
  totalItems: number;
  totalPrice: number;
};

type AddToCartResponse = {
  cartItem: {
    user: User;
    book: Book;
  };
  message: string;
};

type UpdateQuantityResponse = {
  id: number;
  quantity: number;
  createdAt: string;
};

type RemoveFromCart = {
  message: string;
};

const getCart = async () => {
  const response = await api.get<GetCartResponse>("/cart");
  return response.data;
};

const addToCart = async (bookId: number) => {
  const response = await api.post<AddToCartResponse>("/cart", { bookId });
  return response.data;
};

const updateQuantity = async (bookId: number, quantity: number) => {
  const response = await api.patch<UpdateQuantityResponse>("/cart", {
    bookId,
    quantity,
  });
  console.log(response.data);
  return response.data;
};

const removeFromCart = async (bookId: number) => {
  const response = await api.delete<RemoveFromCart>(`/cart/`, {
    params: { bookId },
  });
  return response.data;
};

export default {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
};
