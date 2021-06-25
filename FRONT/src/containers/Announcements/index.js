import { connect } from 'react-redux';

import { deleteBooking, getAnnouncements } from 'src/actions/announcements';

import Announcements from 'src/components/Announcements';
// TODO en cpours de construction
const mapStateToprops = (state) => ({

  announcements:state.announcements.announcements,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteBooking: () => {
    dispatch(deleteBooking());
  },
  loadAnnouncements:() => {
    dispatch(getAnnouncements());
  }
});

export default connect(mapStateToprops, mapDispatchToProps)(Announcements);




