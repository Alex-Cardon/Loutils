// == Import npm
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

import SignupPage from 'src/containers/SignupPage';
import Setting from 'src/components/SettingsPage';

import Error from 'src/components/Error';


import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route excat path="/SignupPage">
          <SignupPage/>
        </Route>
        <Route excat path="/SettingsPage">
          <Setting/>
        </Route>

      </Switch>
      
    <Footer />
    <Error />
  </div>
);

// == Export
export default App;
