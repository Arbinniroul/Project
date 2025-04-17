import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/index"; 
import cropReducer from "./cropSlice/index"; // Adjust path accordingly
// Adjust path accordingly

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crop:cropReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
