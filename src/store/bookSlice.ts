import { createSlice } from "@reduxjs/toolkit";

type Book = {
  id: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
  name: string;
  price: number;
  avgRating?: number;
  ratingsCount?: number;
};

type BookState = {
  books: Book[];
  genres: string[];
  currentBook: Book | null;
  currentFavourites: Book[];
};

const initialState: BookState = {
  books: [],
  genres: [],
  currentBook: null,
  currentFavourites: [],
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
