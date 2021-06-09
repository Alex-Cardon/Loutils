import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import loginFormMiddleware from 'src/middlewares/loginForm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginFormMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
