import { api } from "./api";

const getCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};

const addToCart = async (bookId: number) => {
  const response = await api.post("/cart", { bookId });
  return response.data;
};

const removeFromCart = async (bookId: number) => {
  const response = await api.delete(`/cart/${bookId}`);
  return response.data;
};

export default {
  getCart,
  addToCart,
  removeFromCart,
};
