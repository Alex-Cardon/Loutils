import { connect } from 'react-redux';

import UpdatedProfil from 'src/components/UpdatedProfil';

import {
  submitUpdatedProfil,
} from 'src/actions/profilField.js';
//! je recupère mes proptypes du component index.js de SignupPage 
//!comme le proptype est func cela sera une action direction le container SettingsField
const mapDispatchToProps = (dispatch) => ({
    // envoi du formulaire
    handleUpdatedProfilFormSubmit: (event) => {
    // on ne veut pas que la page se recharge
    event.preventDefault();
    console.log('Je lance une action SUBMIT_UPDATED_PROFIL');
    dispatch(submitUpdatedProfil());
  },
});

export default connect(null, mapDispatchToProps)(UpdatedProfil);
