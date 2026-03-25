import { createSlice } from "@reduxjs/toolkit";
import { tokenStorage } from "../storage/tokenStorage";
import { getMeThunk } from "./authThunks";

type User = {
  id: number;
  email: string;
  name: string | null;
  avatar: string | null;
};

interface AuthState {
  user: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logOut(state) {
      state.user = null;
      tokenStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMeThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.loading = false;
        state.user = null;
      });
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
