// src/components/Counter.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { INCREMENT, RESET } from '../context/appTypes';

const Counter = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </div>
  );
};

export default Counter;
