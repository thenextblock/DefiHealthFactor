import { configureStore } from "@reduxjs/toolkit";
// import mySlice from "./mySlice";
import simulationModeReducer from "./simulationModeSlice";

export const store = configureStore({
  reducer: {
    // mySlice: mySlice,
    simulationMode: simulationModeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
