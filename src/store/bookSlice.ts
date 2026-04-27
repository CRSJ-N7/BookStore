import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book, Genres } from "../types/types";
import { getBooksThunk } from "./getBookThunks";

type BookState = {
  books: Book[];
  genres: Genres;
  currentBook: Book | null;//
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
    setBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload);
    },

    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },

    setGenres(state, action: PayloadAction<Genres>) {
      state.genres = action.payload;
    },

    setFavourites(state, action: PayloadAction<Book[]>) {
      state.currentFavourites = action.payload;
    },

    addFavourite(state, action: PayloadAction<Book>) {
      state.currentFavourites.push(action.payload);
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

export const { setBook, setBooks, setGenres, setFavourites, addFavourite } =
  bookSlice.actions;

export default bookSlice.reducer;
