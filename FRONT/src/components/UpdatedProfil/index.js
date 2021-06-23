import React from 'react';

import Proptypes from "prop-types";
// j'importe mon composant connecté
import Header from 'src/components/Header';
import ProfilField from 'src/containers/UpdatedProfil/ProfilField';
import Footer from 'src/components/Footer';

import './styles.scss';

const UpdatedProfil = ({
  handleUpdatedProfilFormSubmit,
  picture,
  onChangePicture,
  formSubmitPicture,
}) => (
  <div className="signup-page">
    <Header />
    <h2>Mise à jour de mon profil</h2>
    <form className="signup-page__form"
      onSubmit={handleUpdatedProfilFormSubmit}
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

      {/*  <ParamsField
        stateKey="phone"
        type="phone"
        placeholder="votre telephone"
      />*/}

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

      <button className="settings__submit" type="submit" >Modifier</button>
    </form>
    <form onSubmit={formSubmitPicture} method="post" enctype="multipart/form-data">
      <div>
        <label for="file">Sélectionner une photo de profil</label>
        <input 
          value={picture}
          onChange={onChangePicture}
          type="file" id="file" name="file"
          accept="image/png, image/jpeg" />
      </div>
      <div>
        <button type="submit" >Envoyer</button>
      </div>
    </form>
    <Footer />
  </div>
);

UpdatedProfil.proptypes = {
  handleUpdatedProfilFormSubmit: Proptypes.func.isRequired,
};

export default UpdatedProfil;

