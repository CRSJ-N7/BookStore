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
};

const initialState: BookState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBook(state, action) {
      state.books?.push(action.payload);
    },
    getBooks(state, action) {
      state.books = action.payload;
    },
  },
});

export const { setBook, getBooks } = bookSlice.actions;

export default bookSlice.reducer;
