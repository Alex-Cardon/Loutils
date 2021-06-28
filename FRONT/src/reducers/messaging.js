import {
  CHANGE_TEXT_INPUT,
  ADD_MESSAGE,
  SEND_MESSAGE,
  GET_MESSAGES_SUCCESS,

} from 'src/actions/messaging';

const initialState = {
    messages:{},
    sender_id:'',
    recipient_id: "",
    title: "",
    created_at: "",
    content: "",
    has_been_read: false,
    content: '',
    author: '',
    inputValue: '',
    msg_id: '',
    sender_name: "",
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
        message: action.apiData,
      };

    // case ADD_MESSAGE:

    //   return {
    //     ...state,
    //     messages: [
    //       ...state.messages,

    //       {

    //         author: action.message.author,
    //         content: action.message.content,
    //       },
    //     ],
    //   };

    default:
      return state;
  }
};

export default reducer;
