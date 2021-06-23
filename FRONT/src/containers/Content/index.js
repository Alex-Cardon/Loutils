import { connect } from 'react-redux';

import Content from 'src/components/Content';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  id: state.announcements.id,
  title: state.announcements.title,
  description: state.announcements.description,
  price: state.announcements.price,
});

export default connect(mapStateToprops)(Content);




