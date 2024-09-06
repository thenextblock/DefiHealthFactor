import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./mySlice";


export const store = configureStore({
  reducer: {
    mySlice: mySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
