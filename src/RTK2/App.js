// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Posts from './Posts';

function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
