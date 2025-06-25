// features/cartActions.js
import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/add');
export const removeFromCart = createAction('cart/remove');


/**
 To define reusable actions (addToCart, removeFromCart) that are not tied to a specific slice.

export const addToCart = createAction('cart/add');
Helps share actions between multiple reducers or organize them separately.
 */