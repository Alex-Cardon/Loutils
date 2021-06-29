import axios from 'axios';

import {
  GET_MESSAGES,
  getMessagesSuccess,
} from 'src/actions/messaging';


const messagesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MESSAGES:
      console.log(store.getState().user);
      const state = store.getState();
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/messages`, {
        headers:{
          'token': state.user.token
          
        }
      })

        .then((response) => {
          console.log('response de MESSAGES', response.data);
          store.dispatch(getMessagesSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default messagesMiddleware;
