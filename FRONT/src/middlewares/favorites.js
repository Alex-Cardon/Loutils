import axios from 'axios';

import {
  GET_FAVORITES,
  getFavoritesSuccess,
} from 'src/actions/favorites';


const favoritesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAVORITES:
      axios.get(`GET http://localhost:3000/bookmarks`)
        .then((response) => {
          console.log('response de FAVORITES', response.data)
          store.dispatch(getFavoritesSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default favoritesMiddleware;
