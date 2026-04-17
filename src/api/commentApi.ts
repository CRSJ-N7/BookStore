import type { Comment } from "../types/types";
import { api } from "./api";

const getComments = async (bookId: string) => {
  const response = await api.get<Comment[]>(`/books/comments/${bookId}`);
  console.log(response.data);
  return response.data;
};

const createComment = async (bookId: number, text: string) => {
  const response = await api.post<Comment>("/books/comments", {
    bookId,
    text,
  });
  return response.data;
};

export default {
  getComments,
  createComment,
};
