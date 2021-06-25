import axios from 'axios';

import {
  GET_SETTINGS_PAGE,
  getSettingsPageSuccess,
} from 'src/actions/settingsPage';


const settingsPageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SETTINGS_PAGE:
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/randads`)
        .then((response) => {
          console.log('response de GET_SETTINGS_PAGE', response.data)
          store.dispatch(getSettingsPageSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default settingsPageMiddleware;
