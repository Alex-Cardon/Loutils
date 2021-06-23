import { connect } from 'react-redux';

import Content from 'src/components/Content';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  id: state,
  title: state,
  description: state,
  price: state,
});

export default connect(mapStateToprops)(Content);




