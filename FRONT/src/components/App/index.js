// == Import npm
import React from 'react';

import { Switch, Route } from 'react-router-dom';


import Home from 'src/components/Home';
import SignupPage from 'src/containers/SignupPage';
import SettingsPage from 'src/containers/SettingsPage';
import Favorites from 'src/containers/Favorites';
import Announcements from 'src/containers/Announcements';
import Profil from 'src/containers/Profil';
import MyResearch from 'src/containers/MyResearch';
import Params from 'src/containers/Params';
import UpdatedProfil from 'src/containers/UpdatedProfil';


//import AdForm from 'src/containers/adForm';

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
     {/*  {isLogged && (
      <> */}
     {/* <Route exact path="/AdForm">
        <AdForm />
      </Route>*/}
      <Route excat path="/SettingsPage">
        <SettingsPage />
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
      <Route excat path="/UpdatedProfil">
        <UpdatedProfil />
      </Route>
   {/*   </>
      )} */} 
      <Route>
        <Error />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
