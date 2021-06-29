export const GET_ONE_AD = 'GET_ONE_AD';
export const GET_ONE_AD_SUCCESS = 'GET_ONE_AD_SUCCESS';


// action qui déclenche la requete
export const getOneAd = (id) => ({
  type: GET_ONE_AD,
  id,
});

// action lorsque la réponse arrive
export const getOneAdSuccess = (apiData) => ({
  type: GET_ONE_AD_SUCCESS,
  apiData,
});

console.log(getOneAd, getOneAdSuccess);
