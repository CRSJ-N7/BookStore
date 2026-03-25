import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/authApi";
import { tokenStorage } from "../storage/tokenStorage";
import bookApi, { type GetBooksParmas } from "../api/bookApi";

export const getMeThunk = createAsyncThunk(
  "auth/getMe",
  async (_, { rejectWithValue }) => {
    const token = tokenStorage.getAccess();
    console.log("getMeThunk: token =", token);

    if (!token) {
      return rejectWithValue("No access token");
    }
    try {
      const data = await authApi.getMe();
      console.log("getMeThunk: data =", data);

      return data;
    } catch (error) {
      console.log("getMeThunk error:", error);
      tokenStorage.clearAccess();
      return rejectWithValue(error);
    }
  },
);

export const getBooksThunk = createAsyncThunk(
  "books/getBooks",
  async (filterParams: GetBooksParmas | null, { rejectWithValue }) => {
    const data = await bookApi.getBooks(filterParams);

    if (!data.filteredBooks) {
      return rejectWithValue("No books found");
    }
    return data;
  },
);
