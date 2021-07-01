export const CHANGE_TEXT_INPUT = 'CHANGE_TEXT_INPUT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export const changeTextInput = (newValue) => (
  {
    type: CHANGE_TEXT_INPUT,
    newValue,
   
  }
);

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message: message,
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export const getMessages = () => ({
  type: GET_MESSAGES,
});

export const getMessagesSuccess = (apiData) => ({
  type: GET_MESSAGES_SUCCESS,
  apiData,
});

export const sendMsgSuccess = (apiData) => ({
  type: SEND_MSG_SUCCESS,
  apiData,
})
