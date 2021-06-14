import { combineReducers } from 'redux';

import loginFormReducer from './loginForm';
import adFormReducer from './adForm';

const rootReducer = combineReducers({
  ad: adFormReducer,
  user: loginFormReducer,
  
});

export default rootReducer;
