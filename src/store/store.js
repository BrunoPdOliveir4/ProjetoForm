import { createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './modules';

const isTest = process.env.NODE_ENV === 'development';

const composition = composeWithDevTools();

const store = isTest ? createStore(rootReducer, composition) : createStore(rootReducer);

const handleChange = () => {
  const state = store.getState();
  const { user } = state;

  const data = {
    user,
  };

  const parsed = JSON.stringify(data);
  localStorage.setItem('react-base', parsed);
};

store.subscribe(handleChange);

export default store;
