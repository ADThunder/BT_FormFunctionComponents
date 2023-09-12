import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/formSlice";

export const store = configureStore({
  reducer: {
    formSlice,
  },
});
