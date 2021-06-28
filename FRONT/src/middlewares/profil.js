import axios from 'axios';

import {
  GET_PROFIL,
  getProfilSuccess,
  DELETE_ACCOUNT,
  deleteAccountSuccess,
} from 'src/actions/profil';


const profilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFIL: {
      console.log(store.getState().persist.token);
      const state = store.getState()
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/settings`, {
        headers: {
          "token": state.user.token,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log('response GET de profil dans le middleware', response.data) 
          store.dispatch(getProfilSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break;
    }
    case DELETE_ACCOUNT: {

      axios.delete(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/settings`, {
        token: state.user.token
      })
        .then((response) => {
          console.log('response DELETE profil dans le middleware', response.data)
          store.dispatch(deleteAccountSuccess(response.data));
        })
        .catch((error) => console.log(error))

      break;
    }
    default:
      next(action);
  }

};

export default profilMiddleware;
