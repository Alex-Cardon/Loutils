import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginFormReducer from './loginForm';

import adFormReducer from './adForm';

import diaryReducer from './diary';

//! j'import mon réducer 
import settingsFieldReducer from './settingsField';


import selectSearchBarReducer  from './selectSearchBar';
import contentReducer  from './content';
import favoritesReducer  from './favorites';
import myresearchReducer  from './myResearch';
import announcementsReducer  from './announcements';
import paramsFieldReducer  from './paramsField';
import settingsPageReducer  from './settingsPage';
import profilFieldReducer  from './profilField';
import profilReducer from './profil';
import updatedProfilReducer from './updatedProfil';
import messagingReducer from './messaging';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['annoucements']
} 

const rootReducer = combineReducers({
  diary: diaryReducer,
  ad: adFormReducer,
  user: loginFormReducer,
  //! je crée mon state 
  settings : settingsFieldReducer,

  research : selectSearchBarReducer,

  card : contentReducer,

  fav : favoritesReducer,

  my : myresearchReducer,

  announcements : announcementsReducer,

  params : paramsFieldReducer,
 
  page : settingsPageReducer,

  updatedProfil : profilFieldReducer, 

  profil : profilReducer,

  picture : updatedProfilReducer,

  message : messagingReducer,
});

export default persistReducer(persistConfig, rootReducer);
