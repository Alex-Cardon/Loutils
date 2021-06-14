import { connect } from 'react-redux';

import SignupPage from 'src/components/SignupPage';

import {
  submitSettings,
} from 'src/actions/settingsField';
//! je recupère mes proptypes du component index.js de SignupPage 
//!comme le proptype est func cela sera une action direction le container SettingsField
const mapDispatchToProps = (dispatch, ownProps) => ({
    // envoi du formulaire
    handleFormSubmit: (event) => {
    // on ne veut pas que la page se recharge
    event.preventDefault();
    console.log('Je lance une action SUBMIT_SETTINGS');
    dispatch(submitSettings());
  },
});

export default connect(null, mapDispatchToProps)(SignupPage);

