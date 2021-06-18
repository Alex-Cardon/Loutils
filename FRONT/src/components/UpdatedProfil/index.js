import React from 'react';

import Proptypes from "prop-types";
// j'importe mon composant connecté
import Header from 'src/components/Header';
import ProfilField from 'src/components/UpdatedProfil/ProfilField';
//! 1 je fais mon component maintenant direction le sous composant SettingsField

import './styles.scss';

const UpdatedProfil = ({
  handleFormSubmit
}) => (
  <div className="signup-page">
    <Header />
    <h2>Modifier votre compte</h2>
    <form className="signup-page__form"
      onSubmit={handleFormSubmit}
    >
      <ProfilField
        stateKey="pseudo"
        type="text"
        placeholder="votre pseudo"
      />

      <ProfilField
        stateKey="email"
        type="email"
        placeholder="votre email"
      />

      <ProfilField
        stateKey="phone"
        type="phone"
        placeholder="votre telephone"
      />

      <ProfilField
        stateKey="password"
        type="password"
        placeholder="votre mot de passe"
      />

      <ProfilField
        stateKey="confirmPassword"
        type="password"
        placeholder="confirmez mot de passe"
      />
      <form method="post" enctype="multipart/form-data">
        <div>
          <label for="file">Sélectionner une photo de profil</label>
          <input type="file" id="file" name="file" 
          accept="image/png, image/jpeg" />
        </div>
        <div>
          <button>Envoyer</button>
        </div>
      </form>
    </form>
  </div>
);

UpdatedProfil.proptypes = {
  handleFormSubmit: Proptypes.func.isRequired,
};

export default UpdatedProfil;
