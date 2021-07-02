import {
  CHANGE_TEXT_INPUT,
  SEND_MESSAGE,
  GET_MESSAGES_SUCCESS,
} from 'src/actions/messaging';


import { HANDLE_MSG_TEXT, SEND_MSG_SUCCESS, DELETE_MSG_SUCCESS } from 'src/actions/message';


const initialState = {
    msgValue:"",
    inputValue: '',
    messages:{},

    msgDelete:false,

    open:false

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


    case HANDLE_MSG_TEXT:

      return {
        ...state,
        msgValue: action.newMsgValue,
      };

    case DELETE_MSG_SUCCESS:

    return {
      ...state,
      msgDelete: true,
        };

    case SEND_MSG_SUCCESS:

    return {
      ...state,
      msgValue: "",
    }


    default:
      return state;
  }
};

export default reducer;
