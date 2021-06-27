import { connect } from 'react-redux';

import { deleteAccount, getProfil } from 'src/actions/profil'

import Profil from 'src/components/Profil';

const mapStateToprops = (state) => ({
 /* key: state,
  image: state,
  header: state,
  meta: state,
  description: state,
  msg:state,*/
  profil:state.profil.profil,
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


