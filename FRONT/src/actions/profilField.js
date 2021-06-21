export const CHANGE_UPDATED_PROFIL_INPUT = 'CHANGE_UPDATED_PROFIL_INPUT';
export const UPDATED_PROFIL_SUCCESS = 'UPDATED_PROFIL_SUCCESS';
export const SUBMIT_UPDATED_PROFIL = 'SUBMIT_UPDATED_PROFIL';



export const changeUpdatedProfilInput = (settingsKey, newValue) => ({
  type: CHANGE_UPDATED_PROFIL_INPUT,
  // contiendra email ou password
  settingsKey: settingsKey,
  // la nouvelle valeur a sauvegarder
  newValue: newValue,
  
});


export const updatedProfilSuccess = (apiData) => ({
  type: UPDATED_PROFIL_SUCCESS,
  //msg: apiData.msg,
  //token: apiData.token,
});

export const submitUpdatedProfil = () => ({
  type: SUBMIT_UPDATED_PROFIL,
});


