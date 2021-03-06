
import axios from 'axios';

import { SUBMIT_PARAMS, paramsSuccess } from 'src/actions/paramsField';

const paramsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_PARAMS: {
      // avec getstate on apporte le state dans le MW
      const state = store.getState();

      axios.post('http://localhost:3000/account/settings', {

        "name": state.settings.name,
        "email": state.settings.email,
        "password": state.settings.password,
        "confirmPassword": state.settings.confirmPassword,
      })
        .then((response) => {
          console.log('je suis la réponse de params', response.data);
          store.dispatch(paramsSuccess(response.data))
        })
        .catch((error) => console.log(error))
      break;
    }
    default:
      next(action);
  }
};


export default paramsMiddleware;
