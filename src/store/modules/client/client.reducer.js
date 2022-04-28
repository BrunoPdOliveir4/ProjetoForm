const initialState = [];

// eslint-disable-next-line default-param-last
const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENT': {
      const { client } = action.payload;

      return [...state, client];
    }
    default:
      return state;
  }
};

export default clientReducer;
