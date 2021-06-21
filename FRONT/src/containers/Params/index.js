import { connect } from 'react-redux';

import Params from 'src/components/Params';

import {
  submitParams,
} from 'src/actions/paramsField.js';
//! je recupère mes proptypes du component index.js de SignupPage 
//!comme le proptype est func cela sera une action direction le container SettingsField
const mapDispatchToProps = (dispatch) => ({
    // envoi du formulaire
    handleParamsFormSubmit: (event) => {
    // on ne veut pas que la page se recharge
    event.preventDefault();
    console.log('Je lance une action SUBMIT_PARAMS');
    dispatch(submitParams());
  },
});

export default connect(null, mapDispatchToProps)(Params);

