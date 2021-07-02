import axios from 'axios';


import {
  GET_ONE_AD,
  getOneAdSuccess,
  SEND_MESSAGE_FROM_ONE_AD,
  sendMessageFromOneAdSuccess,
} from 'src/actions/oneAd';

const oneAdMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ONE_AD:{


console.log(action.ad_id);
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/ad/${action.id}`)
        .then((response) => {
          console.log('response de ONEAD', response.data.data[0]);
          store.dispatch(getOneAdSuccess(response.data.data[0]));
        })
        .catch((error) => console.log(error))
      break;    }

    case SEND_MESSAGE_FROM_ONE_AD:{
      const state = store.getState();
      console.log("action middleware", action)
      axios.post(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/messages`, {
        "content" : action.msgTxt,
        "recipient" : action.userId,
        "ad_id" : action.adId      
      },
      {
        headers:{
          token: state.user.token,

        }
      })
      .then((response)=> {
        console.log(response.data);
        store.dispatch(sendMessageFromOneAdSuccess(response.data.data[0]));
      })
      .catch((error) => console.log(error));
    break;}
    default:
      next(action);
      break;
  }
};
//console.log(oneAdMiddleware);

export default oneAdMiddleware;
