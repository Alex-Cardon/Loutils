import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Proptypes from "prop-types";
// j'importe mon composant connecté
//import Header from 'src/containers/Header'; <Header />
import ProfilField from 'src/containers/UpdatedProfil/ProfilField';
//import Footer from 'src/components/Footer'; <Footer />

import './styles.scss';

const UpdatedProfil = ({
  handleUpdatedProfilFormSubmit,
  updatedProfil,
  profil,
  getProfileInfo
  //picture,
  //onChangePicture,
  //formSubmitPicture,
}) => {
  useEffect(() => {
    getProfileInfo(profil);
  }, [])
  return (
  <div className="signup-page">
    <h2>Mise à jour de mon profil</h2>
    <form className="signup-page__form"
      onSubmit={handleUpdatedProfilFormSubmit}
    >
      <ProfilField
        stateKey="name"
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
    
  </div>
)};

UpdatedProfil.proptypes = {
  email:Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
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
