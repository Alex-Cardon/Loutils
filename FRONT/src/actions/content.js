export const GET_CONTENT = 'GET_CONTENT';
export const GET_CONTENT_SUCCESS = 'GET_CONTENT_SUCCESS';


// action qui déclenche la requete
export const getContent = () => ({
  type: GET_CONTENT,
});

// action lorsque la réponse arrive
export const getContentSuccess = (recipes) => ({
  type: GET_CONTENT_SUCCESS,
  id: state.id,
  image: state.image,
  title: state.title,
  description: state.description,
  price: state.price,
});
