/*import { connect } from 'react-redux';

import Messaging from 'src/components/Messaging';

import { changeTextInput, sendMessage } from 'src/actions/messaging';

const mapStateToProps = (state) => ({
  inputValue: state.message.inputValue,
  author: state.message.author,
  content: state.message.content,
  
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => {
    dispatch(changeTextInput(event.target.value));
  },
  onMessageSubmit: (event) => {
    event.preventDefault();
    dispatch(sendMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Messaging);
*/
