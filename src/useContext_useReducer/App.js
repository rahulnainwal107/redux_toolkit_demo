// src/App.js
import React from 'react';
import { AppProvider } from './context/AppContext';
import Counter from './components/Counter';
import ThemeToggler from './components/ThemeToggler';

const App = () => (
  <AppProvider>
    <div style={{ padding: 20 }}>
      <h1>useReducer + useContext Modular Setup</h1>
      <Counter />
      <ThemeToggler />
    </div>
  </AppProvider>
);

export default App;
