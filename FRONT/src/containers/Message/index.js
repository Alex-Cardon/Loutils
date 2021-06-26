import { connect } from 'react-redux';

import Message from 'src/components/Message';

const mapStateToProps = (state) => ({
 sender_id: state.message.sender_id,
 recipient_id: state.message.recipient_id,
 title: state.message.title,
 created_at: state.message.created_at,
 content: state.message.content,
 has_been_read: state.message.has_been_read,
});

const mapDispatchToProps = (dispatch) => ({
  loadMessage:() => {
    dispatch(getMessage());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
