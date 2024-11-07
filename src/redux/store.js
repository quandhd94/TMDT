// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import cartReducer from "./cartSlice"; // Import reducer của cart

const store = configureStore({
  reducer: {
    popup: popupReducer,
    cart: cartReducer, // Đăng ký reducer vào store
  },
});

export default store;
