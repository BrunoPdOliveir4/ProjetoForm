const initialState = {
  loading: false,
};

// eslint-disable-next-line default-param-last
const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
