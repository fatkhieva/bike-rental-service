import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../reducers/current-user-slice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});