import { connect } from 'react-redux';

import Profil from 'src/components/Profil';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  key: state,
  image: state,
  header: state,
  meta: state,
  description: state,
});

export default connect(mapStateToprops)(Profil);


