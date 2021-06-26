import { createStore, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// j'importe le reducer la logique du store : une fonction qui chargera le state selon les actions
import reducer from 'src/reducers';

import loginFormMiddleware from 'src/middlewares/loginForm';
import signupMiddleware from 'src/middlewares/signupPage';
import selectSearchBarMiddleware from 'src/middlewares/selectSearchBar';
import announcementsMiddleware from 'src/middlewares/announcements';
import contentMiddleware from 'src/middlewares/content';
import favoritesMiddleware from 'src/middlewares/favorites';
import myResearchMiddleware from 'src/middlewares/myResearch';
import paramsMiddleware from 'src/middlewares/params';
import settingsPageMiddleware from 'src/middlewares/settingsPage';
import profilMiddleware from 'src/middlewares/profil';
import diaryMiddleware from 'src/middlewares/diary';

import rootReducer from './index'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, reducer);
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    loginFormMiddleware,
    signupMiddleware,
    selectSearchBarMiddleware,
    announcementsMiddleware,
    contentMiddleware,
    favoritesMiddleware,
    myResearchMiddleware,
    paramsMiddleware,
    settingsPageMiddleware,
    profilMiddleware,
    diaryMiddleware
  ),
);
// création du store

const store = createStore(persistedReducer, enhancers);

const persistor = persistStore(store);

export {store, persistor };
export default store;

