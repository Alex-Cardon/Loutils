// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from 'src/store';

import App from 'src/components/App';


// on charge le css de notre librairie de composants
import 'semantic-ui-css/semantic.min.css';



const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
        <App /> 
    </Provider>
  </BrowserRouter>
);

const target = document.getElementById('root');

render(rootReactElement, target);
