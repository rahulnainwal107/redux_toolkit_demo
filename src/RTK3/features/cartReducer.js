// features/cartReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart } from './cartActions';

const initialState = {
  items: {}, // { productId: quantity }
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    })
    .addCase(removeFromCart, (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id] -= 1;
        if (state.items[id] <= 0) {
          delete state.items[id];
        }
      }
    });
});

export default cartReducer;

/*
To define cart reducer in a more flexible way using a builder callback.

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(...);
});
Alternative to createSlice when you want more control or to use external actions.
*/
