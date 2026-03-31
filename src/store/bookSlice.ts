import { createSlice } from "@reduxjs/toolkit";
import type { Book, Genres } from "../types/types";
import { getBooksThunk } from "./getBookThunks";

type BookState = {
  books: Book[];
  genres: Genres;
  currentBook: Book | null;
  currentFavourites: Book[];
  loading: boolean;
  totalPages: number;
};

const initialState: BookState = {
  books: [],
  genres: [],
  currentBook: null,
  currentFavourites: [],
  loading: true,
  totalPages: 1,
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
  extraReducers: (builder) => {
    builder
      .addCase(getBooksThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
        state.genres = action.payload.genres;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getBooksThunk.rejected, (state) => {
        state.loading = false;
      });
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
