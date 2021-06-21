import { connect } from 'react-redux';

import SettingsPage from 'src/components/Content';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  id: state,
  title: state,
  description: state,
  price: state,
});

export default connect(mapStateToprops)(SettingsPage);




