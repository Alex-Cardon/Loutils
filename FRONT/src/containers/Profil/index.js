import { connect } from 'react-redux';

import { deleteAccount } from 'src/actions/profil'

import Profil from 'src/components/Profil';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  key: state,
  image: state,
  header: state,
  meta: state,
  description: state,
  msg:state,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteAccount: () => {
    dispatch(deleteAccount());
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(Profil);


