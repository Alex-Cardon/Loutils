import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Proptypes from "prop-types";
// j'importe mon composant connecté
import Header from 'src/components/Header';
import ConnectedSettingsField from 'src/containers/SignupPage/SettingsField';
//! 1 je fais mon component maintenant direction le sous composant SettingsField

import './styles.scss';

const Signup = ({ 
  handleFormSubmit, 
  signUp,
}) => (
  <div className="signup-page">
    <Header />
    <h2>Créer votre compte</h2>
    <form className="signup-page__form"
      onSubmit={handleFormSubmit}
    >
      <ConnectedSettingsField
        stateKey="name"
        type="text" 
        placeholder="votre pseudo"
        
      />

      <ConnectedSettingsField
        stateKey="email"
        type="email" 
        placeholder="votre email"
        
      />

      {/*<ConnectedSettingsField
        stateKey="phone"
        type="phone"
        placeholder="votre telephone"
      />*/}

      <ConnectedSettingsField
        stateKey="password"
        type="password" 
        placeholder="votre mot de passe"
        value=""
       
      />
      <ConnectedSettingsField
        stateKey="confirmPassword"
        type="password" 
        placeholder="confirmez mot de passe"
        
      />

      <button className="settings__submit" type="submit" >Valider</button>
      {signUp && (<Redirect from="/SignupPage" to="/" />)}

<Link to="/" className="backToHomeLink">Annuler</Link>

    </form>
  </div>
);

Signup.proptypes = {
  handleFormSubmit: Proptypes.func.isRequired,
};

export default Signup;
