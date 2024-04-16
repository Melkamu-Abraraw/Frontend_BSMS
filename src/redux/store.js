import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  authForProfileImageReducer,
} from "@/redux/features/auth-slice";

// Load persisted state from local storage or use initial state


// Configure Redux store with preloaded state
export const store = configureStore({
  reducer: {
    auth: authReducer,
    authForProfileImage: authForProfileImageReducer,
  },
});
