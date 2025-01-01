import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

export const cartStore = () => {
  return configureStore({
    reducer: {
        cart: cartSlice
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof cartStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
