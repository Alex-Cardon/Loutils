import {
  CHANGE_TEXT_INPUT,
  SEND_MESSAGE,
  GET_MESSAGES_SUCCESS,
} from 'src/actions/messaging';

import ADD_MSG_TEXT from 'src/actions/message';

const initialState = {
    inputValue: '',
    messages:{},
    // sender_id:'',
    // recipient_id: "",
    // title: "",
    // created_at: "",
    // content: "",
    // has_been_read: false,
    // content: '',
    // author: '',
    // msg_id: '',
    // sender_name: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_TEXT_INPUT:

      return {
        ...state,
        inputValue: action.newValue,
      };

    case SEND_MESSAGE:

      return {
        ...state,
        inputValue: '',   
        content: state.inputValue,
      };

    case GET_MESSAGES_SUCCESS:

      return {
        ...state,
        messages: action.apiData,
      };


    case ADD_MSG_TEXT:

      return {
        ...state,

      };

    default:
      return state;
  }
};

export default reducer;
