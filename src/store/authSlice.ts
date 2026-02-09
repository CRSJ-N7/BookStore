import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    getMe: (state, action) => {
      state = action.payload;
    },
  },
});

export const { getMe } = authSlice.actions;

export default authSlice.reducer;
