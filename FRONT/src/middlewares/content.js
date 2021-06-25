import axios from 'axios';

import {
  GET_CONTENT,
  getContentSuccess,
} from 'src/actions/content';


const contentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CONTENT:

      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/randads`)

        .then((response) => {
          console.log('response de CONTENT', response.data)
          store.dispatch(getContentSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default contentMiddleware;
