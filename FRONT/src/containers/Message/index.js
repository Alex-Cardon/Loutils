import { connect } from 'react-redux';

import Message from 'src/components/Message';

const mapStateToProps = (state) => ({
  sender_name: state.message.sender_name,
  title: state.message.title,
  content: content.message.content,
});

// const mapDispatchToProps = (dispatch) => ({
//   loadMessage:() => {
//     dispatch(getMessage());
//   }
// });

export default connect(mapStateToProps)(Message);
