import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalCartPrice: 0
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += newItem.quantity;
      state.totalCartPrice += (newItem.price * newItem.quantity);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += (newItem.price * newItem.quantity);
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalCartPrice -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    increaseCartItemQty(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity++;
      state.totalCartPrice = state.totalCartPrice + existingItem.price;
      if(existingItem) {
        existingItem.quantity++;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalCartPrice = 0;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;