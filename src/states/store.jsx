import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmode/darkmodeSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
  },
});

export const getRootState = () => store.getState();
export const AppDispatch = store.dispatch;