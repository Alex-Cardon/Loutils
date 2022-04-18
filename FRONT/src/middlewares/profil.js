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
      
      const state = store.getState()
      axios.get(`http://localhost:3000/account/settings`, {
        headers:{
          'token': state.user.token  
        }
      })
        .then((response) => {
          console.log('response GET de profil dans le middleware', response.data.data[0]) 
          store.dispatch(getProfilSuccess(response.data.data[0]));
        })
        .catch((error) => console.log(error))
      break;
    }
    case DELETE_ACCOUNT: {
      const state = store.getState()  
      axios.delete(`http://localhost:3000/account/settings`, {
        headers:{
          'token': state.user.token  
        }
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
