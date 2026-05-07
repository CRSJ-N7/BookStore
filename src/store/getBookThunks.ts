import { createAsyncThunk } from "@reduxjs/toolkit";
import bookApi from "../api/bookApi";
import type { GetBooksParmas } from "../api/bookApi";

export const getBooksThunk = createAsyncThunk(
  "books/getBooks",
  async (params: GetBooksParmas | null, { rejectWithValue }) => {
    try {
      const booksData = await bookApi.getBooks(params);

      return {
        books: booksData.filteredBooks,
        totalPages: booksData.totalPages,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
