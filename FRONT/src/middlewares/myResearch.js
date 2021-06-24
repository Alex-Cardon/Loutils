import axios from 'axios';

import {
  GET_MY_RESEARCH,
  getMyResearchSuccess,
} from 'src/actions/myResearch';


const myResearchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MY_RESEARCH:
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/savedResearch`)
        .then((response) => {
          console.log('response de myResearch', response.data)
          store.dispatch(getMyResearchSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default myResearchMiddleware;
