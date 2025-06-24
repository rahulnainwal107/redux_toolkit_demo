const initialState = { isLoggedIn: false };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: true };
    default:
      return state;
  }
};
