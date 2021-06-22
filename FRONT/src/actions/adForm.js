
export const CHANGE_AD_FIELD = 'CHANGE_AD_FIELD';
export const GET_FILE_UPLOAD = 'GET_FILE_UPLOAD';
export const CHANGE_TOOL_STATE = 'CHANGE_TOOL_STATE';
export const SUBMIT_AD_LOGIN = 'SUBMIT_AD_LOGIN';
export const SELECT_IMAGE = 'SELECT_IMAGE';

export const changeAdField = (newValue, name) => ({
  type: CHANGE_AD_FIELD,
  newValue,
  name,
});

export const changeToolState = (value) => ({
  type: CHANGE_TOOL_STATE,
  value: value.target.value,
});

export const submitAdLogin = () => ({
  type: SUBMIT_AD_LOGIN,
});

export const getFileUpload = (value) => ({
  type: GET_FILE_UPLOAD,
  value: value.target.value,
});

export const selectImage = (file) => ({
  type: SELECT_IMAGE,
  file,
});
