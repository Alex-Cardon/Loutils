
// == Import npm
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from 'src/components/Home';
import SignupPage from 'src/containers/SignupPage';
import Setting from 'src/containers/SettingsPage';
import Favorites from 'src/containers/Favorites';
import Announcements from 'src/containers/Announcements';
import Profil from 'src/containers/Profil';
import MyResearch from 'src/containers/MyResearch';
import Params from 'src/containers/Params';
import UpdatedProfil from 'src/containers/UpdatedProfil';
import Messaging from 'src/containers/Messaging';
import Message from 'src/containers/Message';
import Messages from 'src/containers/Messages';
import Diary from 'src/containers/Diary';
import AdForm from 'src/containers/AdForm';
import Error from 'src/components/Error';
import LoginForm from 'src/containers/LoginForm';
import OneAd from 'src/containers/OneAd';
import Calendar from 'src/containers/Calendar'
import Header from 'src/containers/Header'; 
import Footer from 'src/components/Footer'; 

import './styles.scss';


// == Composant
function App(){



  return (
    <div className="app">
       <Header />
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
        <Route exact path="/ad/:id">
          <OneAd />
        </Route>
        <Route exact path="/Diary/:id">
          <Diary />
        </Route>
        <Route exact path="/Calendar/:id">
          <Calendar />
        </Route>
        <Route excat path="/Login">
          <LoginForm />
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
        <Route excat path="/UpdatedProfil">
          <UpdatedProfil />
        </Route>
        <Route excat path="/Messagerie">
          <Messaging />
        </Route>
        <Route exact path="/Message/:id">
          <Message />
        </Route>
        <Route exact path="/Messages/:id">
          <Messages />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
};

export default App;
