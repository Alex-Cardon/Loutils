export const CHANGE_SETTINGS_INPUT = 'CHANGE_SETTINGS_INPUT';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SUBMIT_SETTINGS = 'SUBMIT_SETTINGS';


//! action créator pour gérer la récupérer la valeur de mes champs input et l'injecter dans le state 
// action commune pour changer les champs de settings
export const changeSettingsInput = (settingsKey, newValue) => ({
  type: CHANGE_SETTINGS_INPUT,
  // contiendra email ou password
  settingsKey: settingsKey,
  // la nouvelle valeur a sauvegarder
  newValue: newValue,
  
});

//! action créator pour gérer la réponse à l'inscription
export const signupSuccess = (apiData) => ({
  type: SIGNUP_SUCCESS,
  msg: apiData.msg,
  token: apiData.token,
});

//! action créator pour gérer le submit des inputs
// pas besoin de parametre
// le reducer pourra gérer avec les infos qu'il a dans le state
export const submitSettings = () => ({
  type: SUBMIT_SETTINGS,
});

//! direction le reduceur settingsFields
