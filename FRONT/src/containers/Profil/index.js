import { connect } from 'react-redux';

import { deleteAccount, getProfil } from 'src/actions/profil'

import Profil from 'src/components/Profil';

const mapStateToprops = (state) => ({
  profil:state.profil.profil,
  deleteAccount:state.profil.deleteAccount,
 
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteAccount: () => {
    dispatch(deleteAccount());
  },

  loadProfil:() => {
    dispatch(getProfil());
  }
});

export default connect(mapStateToprops, mapDispatchToProps)(Profil);


