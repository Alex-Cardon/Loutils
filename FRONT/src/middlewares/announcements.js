import axios from 'axios';

import {
  GET_ANNOUNCEMENTS,
  getAnnouncementsSuccess,
} from 'src/actions/announcements';


const announcementsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ads`
        .then((response) => {
          console.log('response de GET_ANNOUNCEMENTS', response.data)
          store.dispatch(getAnnouncementsSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default announcementsMiddleware;
