import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  authForProfileImageReducer,
} from "@/redux/features/auth-slice";

export const store = configureStore({
  reducer: {
    authReducer,
    authForProfileImageReducer,
  },
});
