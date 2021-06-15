import React from 'react';

import Proptypes from "prop-types";
// j'importe mon composant connecté
import ConnectedSettingsField from 'src/containers/SignupPage/SettingsField';
//! 1 je fais mon component maintenant direction le sous composant SettingsField

const Signup = ({ 
  handleFormSubmit 
}) => (
  <div>
    <h2>Créer votre compte</h2>
    <form className="form"
      onSubmit={handleFormSubmit}
    >
      <ConnectedSettingsField
        stateKey="pseudo"
        type="text"
        placeholder="votre pseudo"
      />

      <ConnectedSettingsField
        stateKey="email"
        type="email"
        placeholder="votre email"
      />

      <ConnectedSettingsField
        stateKey="phone"
        type="phone"
        placeholder="votre telephone"
      />

      <ConnectedSettingsField
        stateKey="password"
        type="password"
        placeholder="votre mot de passe"
      />

      <ConnectedSettingsField
        stateKey="confirmPassword"
        type="password"
        placeholder="confirmez mot de passe"
      />

      <button className="settings__submit" type="submit" >Valider</button>
    </form>
  </div>
);

Signup.proptypes = {
  handleFormSubmit: Proptypes.func.isRequired,
};

export default Signup;
