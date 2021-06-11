import { combineReducers } from 'redux';

import loginFormReducer from './loginForm';
//! j'import mon réducer 
import settingsFieldReducer from './settingsField';

const rootReducer = combineReducers({
  
  user: loginFormReducer,
  //! je crée mon state 
  settings : settingsFieldReducer,
  
});

export default rootReducer;
