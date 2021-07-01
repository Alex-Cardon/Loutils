import React from 'react';

import Proptypes from "prop-types";
// j'importe mon composant connecté
import Header from 'src/containers/Header';
import LoginForm from 'src/containers/LoginForm';
import ParamsField from 'src/containers/Params/ParamsField';
import Footer from 'src/components/Footer';
//! 1 je fais mon component maintenant direction le sous composant ParamsField

import './styles.scss';

const Params = ({ 
  handleParamsFormSubmit 
}) => ( 

  <div className="signup-page">
    <Header />
    <LoginForm /> 
    <h2>Mise à jour de mon profil</h2>
    <form className="signup-page__form"
      onSubmit={handleParamsFormSubmit}
    >
      <ParamsField
        stateKey="name"
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
        stateKey="newPassword"
        type="password"
        placeholder="confirmez mot de passe"
      />

      <button className="settings__submit" type="submit" >Modifier</button>
    </form>
    <Footer />
  </div>
);


Params.proptypes = {
  handleParamsFormSubmit: Proptypes.func.isRequired,
};

export default Params;
