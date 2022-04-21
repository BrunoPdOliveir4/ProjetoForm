import { combineReducers } from 'redux';
import { clientReducer } from './client';
import { commonReducer } from './common';

const reducers = {
  common: commonReducer,
  client: clientReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
