export const HANDLE_MSG_TEXT = 'HANDLE_MSG_TEXT';
export const SEND_MSG_TEXT = 'SEND_MSG_TEXT';

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
