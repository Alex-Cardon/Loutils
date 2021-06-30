import React from 'react';
import { Redirect } from 'react-router-dom';
import Proptypes from "prop-types";
// j'importe mon composant connecté
import Header from 'src/components/Header';
import ProfilField from 'src/containers/UpdatedProfil/ProfilField';
import Footer from 'src/components/Footer';

import './styles.scss';

const UpdatedProfil = ({
  handleUpdatedProfilFormSubmit,
  updatedProfil,
  //picture,
  //onChangePicture,
  //formSubmitPicture,
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


      <button className="settings__submit" type="submit" >Modifier</button>
    </form>
    {updatedProfil && (<Redirect from="/UdatedProfil" to="/" />)}
    <Footer />
  </div>
);

UpdatedProfil.proptypes = {
  handleUpdatedProfilFormSubmit: Proptypes.func.isRequired,
};

export default UpdatedProfil;


      /*  <ParamsField
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
      />*/
