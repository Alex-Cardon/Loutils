import { connect } from 'react-redux';

import { 
  handleMsgText, 
  deleteMsgText, 
  sendMsgText,
} from 'src/actions/message';

import Message from 'src/components/Message';

const mapStateToProps = (state) => ({
  msgValue: state.message.msgValue,
  messages: state.message.messages,
  msgDelete: state.message.msgDelete,
});

const mapDispatchToProps = (dispatch) => ({
  
  addMsgText:(evt) => {
    dispatch(handleMsgText(evt.target.value));
  },

  handleMessage:(msgValue, id, idAd) => {  
    dispatch(sendMsgText(msgValue, id, idAd));
  },

  handleDelete:( msgId) => {  
    dispatch(deleteMsgText(msgId));
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
