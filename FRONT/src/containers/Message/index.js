import { connect } from 'react-redux';

import { 
  handleMsgText, 
  deleteMsgText, 
  sendMsgText,
} from 'src/actions/message';

import Message from 'src/components/Message';
import OneAd from 'src/components/oneAd';

const mapStateToProps = (state) => ({
  msgValue: state.message.msgValue,
  messages: state.message.messages,
});

const mapDispatchToProps = (dispatch) => ({
  
  addMsgText:(evt) => {
    dispatch(handleMsgText(evt.target.value));
  },

  handleMessage:(msgValue, id, idAd) => {  
    dispatch(sendMsgText(msgValue, id, idAd));
  },

  deleteMsgText:() => {
    dispatch(deleteMsgText());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Message, OneAd);
