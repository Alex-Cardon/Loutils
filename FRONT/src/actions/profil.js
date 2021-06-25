export const GET_PROFIL = 'GET_PROFIL';
export const GET_PROFIL_SUCCESS = 'GET_PROFIL_SUCCESS';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';


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

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const deleteAccountSuccess = () => ({
  type: DELETE_ACCOUNT_SUCCESS,
  msg: response.msg,
});
