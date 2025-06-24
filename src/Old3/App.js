import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { increment, login } from './actions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <h2>User: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h2>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
