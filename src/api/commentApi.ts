import { api } from "./api";

const getComments = async (bookId: string) => {
  const response = await api.get(`/books/comments/${bookId}`);
  return response.data;
};

const createComment = async (bookId: number, text: string) => {
  const response = await api.post("/books/comments", {
    bookId,
    text,
  });

  return response.data;
};

export default {
  getComments,
  createComment,
};
