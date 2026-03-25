import { createSlice } from "@reduxjs/toolkit";
import type { Book, Genres } from "../types/types";

type BookState = {
  books: Book[];
  genres: Genres;
  currentBook: Book | null;
  currentFavourites: Book[];
  loading: boolean;
};

const initialState: BookState = {
  books: [],
  genres: [],
  currentBook: null,
  currentFavourites: [],
  loading: true,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBook(state, action) {
      state.books.push(action.payload);
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

    setFavourites(state, action) {
      state.currentFavourites = action.payload;
    },

    addFavourite(state, action) {
      state.currentFavourites.push(action.payload);
    },

    removeFavourite(state, action) {
      state.currentFavourites = state.currentFavourites.filter(
        (book) => book.id !== action.payload,
      );
    },

    clearCurrentBook(state) {
      state.currentBook = null;
    },
  },
});

export const {
  setBook,
  setBooks,
  setGenres,
  setCurrentBook,
  setFavourites,
  addFavourite,
  removeFavourite,
  clearCurrentBook,
} = bookSlice.actions;

export default bookSlice.reducer;
