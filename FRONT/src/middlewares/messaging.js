import axios from 'axios';

import {
  GET_MESSAGES,
  getMessagesSuccess,
} from 'src/actions/messaging';

import { 
  SEND_MSG_TEXT,
  sendMsgSuccess,
 } from 'src/actions/message';

const messagesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    case GET_MESSAGES:
     // console.log(store.getState().user);
      const state = store.getState();
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/messages`, {
        headers:{
          'token': state.user.token
          
        }
      })

        .then((response) => {
         // console.log('response de MESSAGES', response.data);
          store.dispatch(getMessagesSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break

    case SEND_MSG_TEXT: {

      //console.log("je suis dans SEND_MSG_TEXT", action.content);
      

     // console.log("je suis dans SEND_MSG_TEXT", action.content);
      //console.log("store.getState().user: ",store.getState().user);
      const state = store.getState();
      //console.log("state:", state);

      axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/messages',{
        "content": action.content,
        "recipient": action.recipient,
        "ad_id":action.ad_id,
      },
        {headers:{
          "Content-Type": "application/json",
          "token": state.user.token
        }
      })

        .then((response) => {
         // console.log('submit le  MESSAGES', response.data);
          store.dispatch(sendMsgSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    }

    default:
      next(action);
      break;
  }
};

export default messagesMiddleware;
