import { createSlice } from "@reduxjs/toolkit";
// import { tokenStorage } from "../storage/tokenStorage";

type Book = {
  id: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
  name: string;
  price: number;
};

type BookState = {
  books: Book[] | null;
  genres: string[];
  currentBook: Book | null;
};

const initialState: BookState = {
  books: [],
  genres: [],
  currentBook: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBook(state, action) {
      state.books?.push(action.payload);
    },
    setBooks(state, action) {
      state.books = action.payload;
    },
    setGenres(state, action) {
      state.genres = action.payload;
    },
    setCurrentBook(state, action) {
      state.currentBook = action.payload;
    },
  },
});

export const { setBook, setBooks, setGenres, setCurrentBook } =
  bookSlice.actions;

export default bookSlice.reducer;
