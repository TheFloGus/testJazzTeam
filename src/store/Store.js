import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../components/slices/UserDataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataSlice,
  },
});