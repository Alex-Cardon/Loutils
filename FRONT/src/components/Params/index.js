import React from 'react';

import Proptypes from "prop-types";
// j'importe mon composant connecté
import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import ParamsField from 'src/components/Params/ParamsField';
import Footer from 'src/components/Footer';
//! 1 je fais mon component maintenant direction le sous composant SettingsField

import './styles.scss';

const Params = ({ 
  handleFormSubmit 
}) => (
  <div className="signup-page">
    <Header />
    <LoginForm /> 
    <h2>Mes paramètres</h2>
    <form className="signup-page__form"
      onSubmit={handleFormSubmit}
    >
      <ParamsField
        stateKey="pseudo"
        type="text"
        placeholder="votre pseudo"
      />

      <ParamsField
        stateKey="email"
        type="email"
        placeholder="votre email"
      />
     
     {/*  <ParamsField
        stateKey="phone"
        type="phone"
        placeholder="votre telephone"
      />*/}

      <ParamsField
        stateKey="password"
        type="password"
        placeholder="votre mot de passe"
      />

      <ParamsField
        stateKey="confirmPassword"
        type="password"
        placeholder="confirmez mot de passe"
      />

      <button className="settings__submit" type="submit" >Modifier</button>
    </form>
    <Footer />
  </div>
);

Params.proptypes = {
  handleFormSubmit: Proptypes.func.isRequired,
};

export default Params;
