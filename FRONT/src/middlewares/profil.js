import axios from 'axios';

import {
  GET_PROFIL,
  getProfilSuccess,
} from 'src/actions/profil';


const contentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFIL:
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/settings`)
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
