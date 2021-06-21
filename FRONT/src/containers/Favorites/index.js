import { connect } from 'react-redux';

import Favorites from 'src/components/Favorites';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  id: state,
  title: state,
  description: state,
  price: state,
});

export default connect(mapStateToprops)(Favorites);



