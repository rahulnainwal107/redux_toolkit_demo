import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// Set up compose with Redux DevTools if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Apply multiple middleware
const middlewareEnhancer = applyMiddleware(thunk, logger);

// Final composed enhancer
const enhancer = composeEnhancers(middlewareEnhancer);

// Create the store
const store = createStore(rootReducer, enhancer);

export default store;
