export const GET_SETTINGS_PAGE = 'GET_SETTINGS_PAGE';
export const GET_SETTINGS_PAGE_SUCCESS = 'GET_SETTINGS_PAGE_SUCCESS';


// action qui déclenche la requete
export const getSettingsContent = () => ({
  type: GET_SETTINGS_PAGE,
});

// action lorsque la réponse arrive
export const getSettingsPageSuccess = (recipes) => ({
  type: GET_SETTINGS_PAGE_SUCCESS,
  id: state.id,
  image: state.image,
  title: state.title,
  description: state.description,
  price: state.price,
});
