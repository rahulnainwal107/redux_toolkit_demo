// src/components/ThemeToggler.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TOGGLE_THEME } from '../context/appTypes';

const ThemeToggler = () => {
  const { state, dispatch } = useContext(AppContext);

  const themeStyle = {
    background: state.theme === 'dark' ? '#333' : '#eee',
    color: state.theme === 'dark' ? '#fff' : '#000',
    padding: 20,
    marginTop: 10,
  };

  return (
    <div style={themeStyle}>
      <h2>Current Theme: {state.theme}</h2>
      <button onClick={() => dispatch({ type: TOGGLE_THEME })}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggler;
