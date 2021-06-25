import { createStore, applyMiddleware, compose } from 'redux';

import { persistSore } from 'redux-persist';

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




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginFormMiddleware),
  applyMiddleware(signupMiddleware),
  applyMiddleware(selectSearchBarMiddleware),
  applyMiddleware(announcementsMiddleware),
  applyMiddleware(contentMiddleware),
  applyMiddleware(favoritesMiddleware),
  applyMiddleware(myResearchMiddleware),
  applyMiddleware(paramsMiddleware),
  applyMiddleware(settingsPageMiddleware),
  applyMiddleware(profilMiddleware),
  applyMiddleware(diaryMiddleware),
);
// création du store
export const store = createStore(reducer, enhancers);

export const persistor = persistSore(store)

export default {store, persistor };
