import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isLoggedIn: false,
    role: "",
    token: "",
  },
};

const initialStateForProfileImage = {
  value: {
    url: "",
    baseUrl: "http://localhost:3001/api/",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('user');
      return initialState;
    },    
    login: (state, action) => {
  localStorage.setItem('user', JSON.stringify({ isLoggedIn: true, role: action.payload.user.Role, token:action.payload.token }));
  return {
    ...state,
    value: {
      isLoggedIn: true,
      role: action.payload.user.Role,
      token:action.payload.token
    },
  };
},

  },
});

export const authForProfileImageSlice = createSlice({
  name: "authForProfileImage",
  initialState: initialStateForProfileImage,
  reducers: {
    loadProfile: (state, action) => {
      return {
        ...state,
        value: {
          url: action.payload,
        },
      };
    },
  },
});



export const { logout, login } = authSlice.actions;
export const { loadProfile } = authForProfileImageSlice.actions;

export const authReducer = authSlice.reducer;
export const authForProfileImageReducer = authForProfileImageSlice.reducer;
