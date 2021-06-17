// == Import npm
import React from 'react';

import { Switch, Route } from 'react-router-dom';


import Home from 'src/components/Home';
import SignupPage from 'src/containers/SignupPage';
import Setting from 'src/components/SettingsPage';
import Favorites from 'src/components/Favorites';
import Announcements from 'src/components/Announcements';
import Profil from 'src/components/Profil';
import MyResearch from 'src/components/MyResearch';
import Params from 'src/components/Params';


import AdForm from 'src/containers/adForm';

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
      <Route exact path="/AdForm">
        <AdForm />
      </Route>
      <Route excat path="/SettingsPage">
        <Setting />
      </Route>
      <Route excat path="/Favorites">
        <Favorites />
      </Route>
      <Route excat path="/Announcements">
        <Announcements />
      </Route>
      <Route excat path="/MyResearch">
        <MyResearch />
      </Route>
      <Route excat path="/Profil">
        <Profil />
      </Route>
      <Route excat path="/Params">
        <Params />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
