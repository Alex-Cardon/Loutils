import { combineReducers } from 'redux';

import loginFormReducer from './loginForm';
//! j'import mon réducer 
import settingsFieldReducer from './settingsField';

import searchBarReducer from './searchBar';

const rootReducer = combineReducers({
  
  user: loginFormReducer,
  //! je crée mon state 
  settings : settingsFieldReducer,

  search : searchBarReducer,
  
});

export default rootReducer;
