/**
 * 
Scenario: Products and Cart

We’ll build a Redux logic system for a basic e-commerce app with:

Products fetched from an API (createAsyncThunk)
Normalized product data (createEntityAdapter)
Cart logic using createReducer and createAction
Combined slices using combineSlices
Selectors using createSelector
All wired via configureStore
 */

// App.js
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './app/store';
import { fetchProducts } from './features/productsSlice';
import { addToCart, removeFromCart } from './features/cartActions';
import { selectCartDetails, selectCartTotal } from './features/selectors';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.ids.map(id => state.products.entities[id]));
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      {loading && <p>Loading...</p>}
      {products.map((p) => (
        <div key={p.id}>
          <strong>{p.title}</strong> - ${p.price}
          <button onClick={() => dispatch(addToCart(p.id))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartDetails);
  const total = useSelector(selectCartTotal);

  return (
    <div>
      <h2>Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          {item.title} × {item.quantity} = ${item.total.toFixed(2)}
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <h1>Redux Toolkit All-API Example</h1>
      <ProductList />
      <Cart />
    </Provider>
  );
}
