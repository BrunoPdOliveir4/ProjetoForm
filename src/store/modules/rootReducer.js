import { combineReducers } from 'redux';
import { commonReducer } from './common';
import { userReducer } from './user';

const reducers = {
  common: commonReducer,
  user: userReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
