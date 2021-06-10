import { combineReducers } from 'redux';

import loginFormReducer from './loginForm';

const rootReducer = combineReducers({
  
  user: loginFormReducer,
  
});

export default rootReducer;
