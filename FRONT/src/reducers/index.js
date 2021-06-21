import { combineReducers } from 'redux';

import loginFormReducer from './loginForm';

import adFormReducer from './adForm';

//! j'import mon réducer 
import settingsFieldReducer from './settingsField';

import searchBarReducer from './searchBar';
import selectSearchBarReducer  from './selectSearchBar';
import contentReducer  from './content';
import favoritesReducer  from './favorites';
import myresearchReducer  from './myResearch';
import announcementsReducer  from './announcements';
import paramsFieldReducer  from './paramsField';
import settingsPageReducer  from './settingsPage';
import updatedProfilReducer  from './profilField';

const rootReducer = combineReducers({
  ad: adFormReducer,
  user: loginFormReducer,
  //! je crée mon state 
  settings : settingsFieldReducer,

  search : searchBarReducer,

  research : selectSearchBarReducer,

  card : contentReducer,

  fav : favoritesReducer,

  my : myresearchReducer,

  announcements : announcementsReducer,

  params : paramsFieldReducer,
 
  page : settingsPageReducer,

  updatedProfil : updatedProfilReducer, 
});

export default rootReducer;
