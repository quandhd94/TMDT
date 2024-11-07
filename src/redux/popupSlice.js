// src/redux/popupSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  isVisible: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup(state, action) {
      state.product = action.payload;
      state.isVisible = true;
    },
    hidePopup(state) {
      state.product = null;
      state.isVisible = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export default popupSlice.reducer;
