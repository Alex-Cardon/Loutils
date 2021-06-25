export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';

// action qui déclenche la requete
export const getFavorites = () => ({
  type: GET_FAVORITES,
});

// action lorsque la réponse arrive
export const getFavoritesSuccess = () => ({
  type: GET_FAVORITES_SUCCESS,
  id: state.id,
  image: state.image,
  title: state.title,
  description: state.description,
  price: state.price,
});
