import { connect } from 'react-redux';

import MyReaserch from 'src/components/MyResearch';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  id: state,
  title: state,
  description: state,
  price: state,
});

export default connect(mapStateToprops)(MyReaserch);



