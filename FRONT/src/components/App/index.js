// == Import npm
import React from 'react';

import { Switch, Route } from 'react-router-dom';


import Home from 'src/components/Home';
import SignupPage from 'src/containers/SignupPage';
import Setting from 'src/components/SettingsPage';
import Error from 'src/components/Error';


import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route excat path="/SignupPage">
        <SignupPage />
      </Route>
      <Route excat path="/SettingsPage">
        <Setting />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
