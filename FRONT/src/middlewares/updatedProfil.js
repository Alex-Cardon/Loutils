import axios from 'axios';

import {
  SUBMIT_UPDATED_PROFIL,
  submitUpdatedProfilSuccess
} from 'src/actions/updatedProfil';

const updatedProfilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_UPDATED_PROFIL: {
      const state = store.getState();
      axios.patch('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/settings', {

          "name": state.updatedProfil.name,
          "email": state.updatedProfil.email,

        }, {
          headers: {
            'token': state.user.token
          }
        })
        .then((response) => {
          console.log('je suis la réponse de submitUpdatedProfilSuccess', response.data);
          store.dispatch(submitUpdatedProfilSuccess(response.data))
        })
        .catch((error) => console.log(error))
      break;
    }
    default:
      next(action);
  }
}


export default updatedProfilMiddleware;
