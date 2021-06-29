import { connect } from 'react-redux';
import { 
  addMsgText, 
  deleteMsgText, 
  submitMsgText,
} from 'src/actions/message';

import Message from 'src/components/Message';

const mapStateToProps = (state) => ({
  messages: state.message.messages,
});

const mapDispatchToProps = (dispatch) => ({
  addMsgText:() => {
    dispatch(addMsgText());
  },

  deleteMsgText:() => {
    dispatch(deleteMsgText());
  },
  submitMsgText:() => {
    dispatch(submitMsgText());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
