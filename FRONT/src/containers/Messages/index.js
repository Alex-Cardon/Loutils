import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

import { getMessages } from 'src/actions/messaging'

const mapStateToProps = (state) => ({
  sender_id: state.message.sender_id,
  recipient_id: state.message.recipient_id,
  title: state.message.title,
  message: state.message.message,
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages:() => {
    dispatch(getMessages());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

