import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/authApi";
import { tokenStorage } from "../storage/tokenStorage";

class ValidationError extends Error {
  constructor() {
    super();
    this.message = "validation_error";
  }
}

export const getMeThunk = createAsyncThunk(
  "auth/getMe",
  async (_, { rejectWithValue }) => {
    const token = tokenStorage.getAccess();
    console.log("getMeThunk: token =", token);

    if (!token) {
      throw new ValidationError();
    }
    try {
      const data = await authApi.getMe();
      console.log("getMeThunk: data =", data);

      return data;
    } catch (error) {
      if (error instanceof ValidationError) {
        return rejectWithValue(error);
      }
      console.log("getMeThunk error:", error);
      tokenStorage.clearAccess();
      return rejectWithValue(error);
    }
  },
);
