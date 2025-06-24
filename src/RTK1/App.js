/*We'll build a simple counter app using:

1 - createSlice
2 - configureStore
3 - useSelector and useDispatch
*/

import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
