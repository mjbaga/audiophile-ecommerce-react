import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, mobileMenuIsActive: false },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleMobileMenu(state) {
      state.mobileMenuIsActive = !state.mobileMenuIsActive;
    },
    closeOverlay(state) {
      state.cartIsVisible = false;
      state.mobileMenuIsActive = false;
    }
  }
});

export const { toggleCart, toggleMobileMenu, closeOverlay } = uiSlice.actions;

export default uiSlice;