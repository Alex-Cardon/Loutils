import axios from 'axios';

import {
  GET_MY_RESEARCH,
  getMyResearchSuccess,
} from 'src/actions/myResearch';


const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MY_RESEARCH:
      axios.get(`GET http://localhost:3000/search`)
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

export default apiMiddleware;
