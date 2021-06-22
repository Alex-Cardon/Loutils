export const GET_PROFIL = 'GET_PROFIL';
export const GET_PROFIL_SUCCESS = 'GET_PROFIL_SUCCESS';


// action qui déclenche la requete
export const getProfil = () => ({
  type: GET_PROFIL,
});

// action lorsque la réponse arrive
export const getProfilSuccess = (recipes) => ({
  type: GET_PROFIL_SUCCESS,
  key: state,
  image: state,
  header: state,
  meta: state,
  description: state,
});
