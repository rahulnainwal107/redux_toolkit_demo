// app/store.js
import { configureStore, combineSlices } from '@reduxjs/toolkit';
import productsSlice from '../features/productsSlice';
import cartReducer from '../features/cartReducer';

const rootReducer = combineSlices({
  products: productsSlice,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;

/*
To combine both:

productsSlice (uses createSlice)
cartReducer (uses createReducer)
const rootReducer = combineSlices({
  products: productsSlice,
  cart: cartReducer,
});
Better than combineReducers() — works with slices and plain reducers alike.
*/