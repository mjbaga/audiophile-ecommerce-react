import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const { toggleCart } = uiSlice.actions;

export default uiSlice;