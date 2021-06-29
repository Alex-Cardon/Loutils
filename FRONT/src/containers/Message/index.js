import { connect } from 'react-redux';
import { 
  handleMsgText, 
  deleteMsgText, 
  submitMsgText,
} from 'src/actions/message';

import Message from 'src/components/Message';

const mapStateToProps = (state) => ({
  msgValue: state.message.msgValue,
  messages: state.message.messages,
});

const mapDispatchToProps = (dispatch) => ({
  addMsgText:(evt) => {
    dispatch(handleMsgText(evt.target.value));
  },

  deleteMsgText:() => {
    dispatch(deleteMsgText());
  },
  submitMsgText:() => {
    dispatch(submitMsgText());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
