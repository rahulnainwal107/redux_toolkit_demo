// src/context/appReducer.js
import { TOGGLE_THEME, INCREMENT, RESET } from './appTypes';

export const initialState = {
  theme: 'light',
  count: 0,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
