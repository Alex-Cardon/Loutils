import { combineReducers } from 'redux';

import loginFormReducer from './loginForm';

import adFormReducer from './adForm';

//! j'import mon réducer 
import settingsFieldReducer from './settingsField';

import searchBarReducer from './searchBar';
import selectSearchBarReducer  from './selectSearchBar';
import contentReducer  from './content';

const rootReducer = combineReducers({
  ad: adFormReducer,
  user: loginFormReducer,
  //! je crée mon state 
  settings : settingsFieldReducer,

  search : searchBarReducer,

  research : selectSearchBarReducer,

  card : contentReducer,
  
});

export default rootReducer;
