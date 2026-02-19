import { createSlice } from "@reduxjs/toolkit";
import { tokenStorage } from "../storage/tokenStorage";

type User = {
  id: number;
  email: string;
  name: string | null;
  avatar: string | null;
};

interface AuthState {
  user: User | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logOut(state) {
      state.user = null;
      state.isAuth = false;
      tokenStorage.clear();
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
