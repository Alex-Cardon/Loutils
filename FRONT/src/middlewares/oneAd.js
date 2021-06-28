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
      const { id } = useParams();
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/ad/${id}`)

        .then((response) => {
          //console.log('response de CONTENT', response.data);
          store.dispatch(getOneAdSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default oneAdMiddleware;
