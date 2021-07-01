export const HANDLE_MSG_TEXT = 'HANDLE_MSG_TEXT';
export const SEND_MSG_TEXT = 'SEND_MSG_TEXT';
export const SEND_MSG_SUCCCESS ='SEND_MSG_SUCCCESS'

export const handleMsgText = (newMsgValue) => ({
  type: HANDLE_MSG_TEXT,
  newMsgValue,
});

export const deleteMsgText = () => ({

});

export const sendMsgText = (content, recipient, ad_id) => ({
  type: SEND_MSG_TEXT,
  content,
  recipient,
  ad_id,
});

export const sendMsgSuccess = () => ({
  type: SEND_MSG_SUCCCESS,
  message, 
  isOk,
});
