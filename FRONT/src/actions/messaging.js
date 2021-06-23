export const CHANGE_TEXT_INPUT = 'CHANGE_TEXT_INPUT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';

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

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
