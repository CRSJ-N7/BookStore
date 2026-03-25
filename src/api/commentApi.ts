import type { Book, Comment, User } from "../types/types";
import { api } from "./api";

type CreateCommentResponse = {
  text: string;
  id: number;
  createdAt: string;
  user: User;
  book: Book;
};

const getComments = async (bookId: string) => {
  const response = await api.get<Comment[]>(`/books/comments/${bookId}`);
  console.log(response.data);
  return response.data;
};

const createComment = async (bookId: number, text: string) => {
  const response = await api.post<CreateCommentResponse>("/books/comments", {
    bookId,
    text,
  });
  return response.data;
};

export default {
  getComments,
  createComment,
};
