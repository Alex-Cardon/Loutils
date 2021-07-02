import { connect } from 'react-redux';

import UpdatedProfil from 'src/components/UpdatedProfil';

import {
  submitUpdatedProfil,
} from 'src/actions/updatedProfil.js';
import { changeUpdatedProfilInput } from 'src/actions/profilField';
import { getProfileInfo } from '../../actions/updatedProfil';


const mapStateToProps = (state) => ({
  
  updatedProfil: state.updatedProfil.updatedProfil,
  profil: state.profil.profil
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    // envoi du formulaire
  handleUpdatedProfilFormSubmit: (event) => {
    // on ne veut pas que la page se recharge
    event.preventDefault();
    console.log('Je lance une action SUBMIT_UPDATED_PROFIL');
    dispatch(submitUpdatedProfil());
  },
  getProfileInfo: (profil) => {
    dispatch(getProfileInfo(profil));
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatedProfil);

/*
import {
  submitPicture,
  changePictureInput,
}from 'src/actions/updatedProfil.js';


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
*/
