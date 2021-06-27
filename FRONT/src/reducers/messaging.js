import {
  CHANGE_TEXT_INPUT,
  ADD_MESSAGE,
  SEND_MESSAGE,

} from 'src/actions/messaging';
import announcements from '../components/Announcements';

const initialState = {
    //id='',
    content: '',
    author: '',
  inputValue: '',
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
        //author: state.recipient,
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
