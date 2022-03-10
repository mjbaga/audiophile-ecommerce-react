import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: 'category',
  initialState: { categories: [] },
  reducers: {
    replaceCategoriesData(state, action) {
      state.categories = action.payload;
    }
  }
});

export const { replaceCategoriesData } = categorySlice.actions;

export default categorySlice;