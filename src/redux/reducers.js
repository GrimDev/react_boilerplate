import { combineReducers } from 'redux';

import globalReducer from './global/reducer';
import userReducer from './users/reducer';

export default combineReducers({
  global: globalReducer,
  user: userReducer,
});
