import { connect } from 'react-redux';

import { deleteBooking, getAnnouncements } from 'src/actions/announcements';

import Announcements from 'src/components/Announcements';

const mapStateToprops = (state) => ({ 
  begining: state.announcements.begining, 
  end: state.announcements.end, 
  loading:state.announcements.loading,
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




