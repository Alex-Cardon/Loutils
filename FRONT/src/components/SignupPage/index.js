import React from 'react';

import ConnectedSettingsField from 'containers/LoginForm/SettingsField';

import Proptypes from "prop-types";

const Signup = ({handleFormSubmit}) => (
  <div>
    <h2>Créer votre compte</h2>
    <form className="form">
          <ConnectedSettingsField
            stateKey="pseudo"
            type="text"
            placeholder="votre pseudo"
          />

      {/*<div className='form__name'>
      <label>Pseudo: </label>
        <input 
          type="text" 
          placeholder='votre pseudo' 
          name="pseudo" 
          value={pseudo}
      onchange={handleInputChange}
       </div>
      />*/}
          
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

      <button className="submit" onSubmit={handleFormSubmit}>Valider</button>
    </form>
  </div>
);

Signup.proptypes = {

  handleFormSubmit: Proptypes.func.isRequired,
};

export default Signup;
