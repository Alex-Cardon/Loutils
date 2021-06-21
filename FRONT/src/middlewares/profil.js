import axios from 'axios';

import {
  GET_PROFIL,
  getProfilSuccess,
} from 'src/actions/profil';


const contentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFIL:
      axios.get(`GET http://localhost:3000/randads`)
        .then((response) => {
          console.log('response de CONTENT', response.data)
          store.dispatch(getProfilSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default contentMiddleware;
