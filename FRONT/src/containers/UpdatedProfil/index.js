import { connect } from 'react-redux';

import UpdatedProfil from 'src/components/UpdatedProfil';

import {
  submitUpdatedProfil,
} from 'src/actions/profilField.js';

import {
  submitPicture,
  changePictureInput,
}from 'src/actions/updatedProfil.js';

const mapStateToProps = (state) => ({
  
  value: state.picture.value,
});

const mapDispatchToProps = (dispatch) => ({
    // envoi du formulaire
    handleUpdatedProfilFormSubmit: (event) => {
    // on ne veut pas que la page se recharge
    event.preventDefault();
    console.log('Je lance une action SUBMIT_UPDATED_PROFIL');
    dispatch(submitUpdatedProfil());
  },
  formSubmitPicture: (event) => {
    // on ne veut pas que la page se recharge
    event.preventDefault();
    console.log('Je lance une action SUBMIT_pICTURE');
    dispatch(submitPicture());
  },

  onChange: (event) => {
    console.log(event.target.value);
    dispatch(changePictureInput(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatedProfil);
