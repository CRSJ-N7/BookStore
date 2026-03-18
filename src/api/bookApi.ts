import { api } from "./api";

type BookData = {
  id?: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
  name: string;
  price: number;
};

const uploadBook = async (data: BookData) => {
  const response = await api.post("/books/shoot", data);
  return response.data;
};

const getBooks = async (params?: object) => {
  const response = await api.get("/books", { params });
  console.log("GetBooks:", response.data);
  return response.data;
};

const getGenres = async () => {
  const response = await api.get("/books/genres");
  return response.data;
};

const getBook = async (bookId: string) => {
  const response = await api.get(`/books/${bookId}`);
  return response.data;
};

const rateBook = async (bookId: number, value: number) => {
  const response = await api.patch(`/books/rate/${bookId}`, {
    bookId,
    rateValue: value,
  });

  return response.data;
};

const getFavourites = async () => {
  const response = await api.get("/books/favourites");

  console.log(`User favourited::`, response);
  return response.data;
};

const toggleFavourite = async (bookId: number) => {
  const response = await api.patch(`/books/favourites/${bookId}`);
  return response.data;
};

const searchBook = async (name: string) => {
  console.log("зашли в search");
  const response = await api.get("/books/search", { params: { name } });
  console.log(response.data);
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
