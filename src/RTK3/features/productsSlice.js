// features/productsSlice.js
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productsAdapter = createEntityAdapter();

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState({
    loading: false,
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const productsSelectors = productsAdapter.getSelectors((state) => state.products);
export default productsSlice;

/*
To normalize product data (i.e., store as ids and entities), which improves performance and simplifies updates.

const productsAdapter = createEntityAdapter();
Makes working with large lists of items more efficient, like managing an object map instead of arrays.

*/