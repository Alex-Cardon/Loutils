import { combineReducers } from 'redux';

import loginFormReducer from './loginForm';

import adFormReducer from './adForm';

//! j'import mon réducer 
import settingsFieldReducer from './settingsField';

import searchBarReducer from './searchBar';
import SelectSearchBar  from './selectSearchBar';

const rootReducer = combineReducers({
  ad: adFormReducer,
  user: loginFormReducer,
  //! je crée mon state 
  settings : settingsFieldReducer,

  search : searchBarReducer,

  research : SelectSearchBar,
  
});

export default rootReducer;
