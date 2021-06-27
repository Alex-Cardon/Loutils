
export const HANDLE_UPDATED_PROFIL_SUBMIT = "HANDLE_UPDATED_PROFIL_SUBMIT";
export const CHANGE_PICTURE_INPUT = 'CHANGE_PICTURE_INPUT';
export const SUBMIT_PICTURE = 'SUBMIT_PICTURE';
export const UPDATED_PICTURE_SUCCESS = 'UPDATED_PICTURE_SUCCESS';
// Nos actions
//! action créator pour gérer le submit du formulaire direction les actions settingsField.js
export const handleUpdatedProfilSubmit = () => (
  {
    type: HANDLE_UPDATED_PROFIL_SUBMIT,
    
  });

  export const changePictureInput = (newValue) => ({
    type: CHANGE_PICTURE_INPUT,
    
    newValue: newValue,
    
  });

export const submitPicture = () => ({
  type: SUBMIT_PICTURE,
});

export const updatedPitureSuccess = () => ({
  type: UPDATED_PICTURE_SUCCESS,
  //msg: apiData.msg,
  //token: apiData.token,
});



