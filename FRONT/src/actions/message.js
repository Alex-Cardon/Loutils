export const HANDLE_MSG_TEXT = 'HANDLE_MSG_TEXT';
export const SEND_MSG_TEXT = 'SEND_MSG_TEXT';
export const SEND_MSG_SUCCESS = 'SEND_MSG_SUCCESS';
export const DELETE_MSG_TEXT = 'DELETE_MSG_TEXT';
export const DELETE_MSG_SUCCESS = 'DELETE_MSG_SUCCESS';

export const handleMsgText = (newMsgValue) => ({
  type: HANDLE_MSG_TEXT,
  newMsgValue,
});

export const deleteMsgText = (msgId) => ({
  type: DELETE_MSG_TEXT,
  msgId,
});

export const deleteMsgSuccess= (msg) => ({
  type: DELETE_MSG_SUCCESS,
  msg,
});

export const sendMsgText = (content, recipient, ad_id) => ({
  type: SEND_MSG_TEXT,
  content,
  recipient,
  ad_id,
});

export const sendMsgSuccess = () => ({
  type: SEND_MSG_SUCCESS,
});

