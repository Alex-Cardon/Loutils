export const CHANGE_PARAMS_INPUT = 'CHANGE_PARAMS_INPUT';
export const PARAMS_SUCCESS = 'PARAMS_SUCCESS';
export const SUBMIT_PARAMS = 'SUBMIT_PARAMS';


//! action créator pour gérer la récupérer la valeur de mes champs input et l'injecter dans le state 
// action commune pour changer les champs de settings
export const changeParamsInput = (settingsKey, newValue) => ({
  type: CHANGE_PARAMS_INPUT,
  // contiendra email ou password
  settingsKey: settingsKey,
  // la nouvelle valeur a sauvegarder
  newValue: newValue,
  
});

//! action créator pour gérer la réponse à l'inscription
export const paramsSuccess = (apiData) => ({
  type: PARAMS_SUCCESS,
  //TODO en fonction de la response API
  //msg: apiData.msg,
  //token: apiData.token,
});

//! action créator pour gérer le submit des inputs et envoyer dans le state
// pas besoin de parametre
// le reducer pourra gérer avec les infos qu'il a dans le state
export const submitParams = () => ({
  type: SUBMIT_PARAMS,
});

//! direction le reduceur paramsFields
