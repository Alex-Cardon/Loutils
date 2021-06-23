import { connect } from 'react-redux';

import Announcements from 'src/components/Announcements';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  id: state,
  title: state,
  description: state,
  price: state,
});

export default connect(mapStateToprops)(Announcements);




