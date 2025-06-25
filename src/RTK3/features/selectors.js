// features/selectors.js
import { createSelector } from '@reduxjs/toolkit';
import { productsSelectors } from './productsSlice';

export const selectCartItems = (state) => state.cart.items;

export const selectCartDetails = createSelector(
  [productsSelectors.selectEntities, selectCartItems],
  (products, cartItems) =>
    Object.entries(cartItems).map(([id, qty]) => ({
      ...products[id],
      quantity: qty,
      total: qty * products[id].price,
    }))
);

export const selectCartTotal = createSelector(
  [selectCartDetails],
  (items) => items.reduce((sum, item) => sum + item.total, 0)
);


/*
To create memoized selectors that compute derived state efficiently (like total cart value).

export const selectCartTotal = createSelector(
  [selectCartDetails],
  (items) => items.reduce((sum, item) => sum + item.total, 0)
);
Avoids unnecessary recalculations and re-renders — improves performance.
*/
