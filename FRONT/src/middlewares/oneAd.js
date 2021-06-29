import axios from 'axios';

import {
  useParams
} from "react-router-dom";

import {
  GET_ONE_AD,
  getOneAdSuccess,
} from 'src/actions/oneAd';


const oneAdMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ONE_AD:
console.log(action.id);
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/ad/${action.id}`)
        .then((response) => {
          console.log('response de ONEAD', response.data.data[0]);
          store.dispatch(getOneAdSuccess(response.data.data[0]));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};
console.log(oneAdMiddleware);

export default oneAdMiddleware;
