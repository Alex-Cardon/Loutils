import { connect } from 'react-redux';

import { deleteBooking } from 'src/actions/announcements';

import Announcements from 'src/components/Announcements';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  id: state,
  title: state,
  description: state,
  price: state,
  msg:state,
  begining: state.diary.date[0],
  end: state.diary.date[1],
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteBooking: () => {
    dispatch(deleteBooking());
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(Announcements);




