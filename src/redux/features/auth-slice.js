import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isLoggedIn: false,
    username: "",
    email: "",
  },
};

export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action) => {
      return {
        value: {
          isLoggedIn: false,
          username: action.payload,
        },
      };
    },
  },
});

export const { logout, login } = auth.actions;
export default auth.reducer;
