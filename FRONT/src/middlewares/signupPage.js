
import axios from 'axios';

import { SUBMIT_SETTINGS, changeSettingsInput } from 'src/actions/settingsField';

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SETTINGS: {
      // avec getstate on apporte le state dans le MW
      const state = store.getState();
      axios.post('http://localhost:3000/register', {
        name: state.settings.name,
        email: state.settings.email,
        password: state.settings.password,
        confirmPassword: state.settings.password,

      })
        .then((response) => {
          console.log('je suis la réponse de registrer', response.data);
          store.dispatch(changeSettingsInput(response.data))
        })
        .catch((error) => console.log(error))
      break;
    }
    default:
      next(action);
  }
}


export default signupMiddleware;
