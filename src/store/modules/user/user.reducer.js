const initialState = null;

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const { name, email, password } = action.payload;

      return {
        name,
        email,
        password,
      };
    }
    case 'LOGOUT': {
      return null;
    }
    default:
      return state;
  }
};

export default userReducer;
