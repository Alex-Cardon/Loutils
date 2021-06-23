import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { changeTextInput, sendMessage } from 'src/actions/messaging';


const mapStateToProps = (state) => ({
  inputValue: state.message.inputValue,
  author:state.message.author,
  content:state.message.content,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => {
    dispatch(changeTextInput(event.target.value));
  },
  onMessageSubmit: (event) => {
    event.preventDefault();
    //console.log('Je délenche une action SEND_MESSAGE.');
    dispatch(sendMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
