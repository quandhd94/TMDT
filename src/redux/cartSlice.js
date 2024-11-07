// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Hàm tiện ích để lấy dữ liệu từ localStorage nếu có
const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("listCart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Could not parse cart from localStorage", error);
    return [];
  }
};

// Khởi tạo trạng thái giỏ hàng từ localStorage
const initialCart = loadCartFromLocalStorage();

// Hàm lưu trạng thái giỏ hàng vào localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("listCart", JSON.stringify(cart));
  } catch (error) {
    console.error("Could not save cart to localStorage", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { listCart: initialCart },
  reducers: {
    ADD_CART: (state, action) => {
      const existingProduct = state.listCart.find(
        (item) => item._id.$oid === action.payload._id.$oid
      );

      if (existingProduct) {
        existingProduct.quantity = Math.max(
          existingProduct.quantity + action.payload.quantity,
          0
        );
      } else {
        state.listCart.push({
          ...action.payload,
          quantity: Math.max(action.payload.quantity, 1),
        });
      }
      saveCartToLocalStorage(state.listCart);
    },
    UPDATE_CART: (state, action) => {
      const product = state.listCart.find(
        (item) => item._id.$oid === action.payload._id.$oid
      );
      if (product) {
        product.quantity = Math.max(action.payload.quantity, 0);
      }
      saveCartToLocalStorage(state.listCart);
    },
    DELETE_CART: (state, action) => {
      state.listCart = state.listCart.filter(
        (item) => item._id.$oid !== action.payload._id.$oid
      );
      saveCartToLocalStorage(state.listCart);
    },
  },
});

export const { ADD_CART, UPDATE_CART, DELETE_CART } = cartSlice.actions;
export default cartSlice.reducer;
