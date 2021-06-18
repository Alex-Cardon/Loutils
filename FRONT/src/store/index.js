import { createStore, applyMiddleware, compose } from 'redux';

// j'importe le reducer la logique du store : une fonction qui chargera le state selon les actions
import reducer from 'src/reducers';

import loginFormMiddleware from 'src/middlewares/loginForm';
import signupMiddleware from 'src/middlewares/signupPage';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginFormMiddleware),
  applyMiddleware(signupMiddleware),
  
);
// création du store
const store = createStore(reducer, enhancers);

export default store;
