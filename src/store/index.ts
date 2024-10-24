import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import usersReducer from "./slices/usersSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
