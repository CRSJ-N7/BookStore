import type { Book } from "../types/types";
import { api } from "./api";

export type GetBooksParmas = {
  page?: number;
  min?: number;
  max?: number;
  genre?: string;
  sortBy?: string;
};

export type GetBooks = {
  filteredBooks: Book[];
  total: number;
  totalPages: number;
};

type GetGenres = {
  genres: string[];
};

const uploadBook = async (data: Omit<Book, "id">) => {
  const response = await api.post<Book>("/books/shoot", data);
  return response.data;
};

const getBooks = async (params: GetBooksParmas | null) => {
  const response = await api.get<GetBooks>("/books", { params });
  return response.data;
};

const getGenres = async () => {
  const response = await api.get<GetGenres>("/books/genres");
  return response.data;
};

const getBook = async (bookId: number) => {
  const response = await api.get<Book>(`/books/${bookId}`);
  return response.data;
};

const rateBook = async (bookId: number, value: number) => {
  const response = await api.patch<Book>(`/books/rate/${bookId}`, {
    bookId,
    rateValue: value,
  });

  return response.data;
};

const getFavourites = async () => {
  const response = await api.get<Book[]>("/books/favourites");

  return response.data;
};

const toggleFavourite = async (bookId: number) => {
  const response = await api.patch<{ message: string }>(
    `/books/favourites/${bookId}`,
  );
  return response.data;
};

const searchBook = async (name: string) => {
  const response = await api.get<Book[]>("/books/search", { params: { name } });
  return response.data;
};

export default {
  uploadBook,
  getBooks,
  getGenres,
  getBook,
  rateBook,
  toggleFavourite,
  getFavourites,
  searchBook,
};
