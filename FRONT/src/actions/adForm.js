export const CHANGE_AD_FIELD = 'CHANGE_AD_FIELD';
export const CHANGE_AD_FIELD_SUCCESS = 'CHANGE_AD_FIELD_SUCCESS';
export const GET_FILE_UPLOAD = 'GET_FILE_UPLOAD';
export const GET_FILE_UPLOAD_SUCCESS = 'GET_FILE_UPLOAD_SUCCESS';
export const CHANGE_TOOL_STATE = 'CHANGE_TOOL_STATE';
export const CHANGE_TOOL_STATE_SUCCESS = 'CHANGE_TOOL_STATE_SUCCESS';
export const SUBMIT_AD_LOGIN = 'SUBMIT_AD_LOGIN';
export const SUBMIT_AD_LOGIN_SUCCESS = 'SUBMIT_AD_LOGIN_SUCCESS';
export const SELECT_IMAGE = 'SELECT_IMAGE';
export const SELECT_IMAGE_SUCCESS = 'SELECT_IMAGE_SUCCESS';
export const UPLOAD_FILE = "UPLOAD_FILE";
export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
export const INPUT_DATE = 'INPUT_DATE';
export const INPUT_DATE_SUCCESS = 'INPUT_DATE_SUCCESS';
export const GET_TOOL_STATE_VALUE = 'GET_TOOL_STATE_VALUE';
export const GET_TOOL_STATE_VALUE_SUCCESS = 'GET_TOOL_STATE_VALUE_SUCCESS';

export const changeAdField = (newValue, name) => ({
  type: CHANGE_AD_FIELD,
  newValue,
  name,
});

// export const changeAdFieldSuccess = (newValue, name) => ({
//   type: CHANGE_AD_FIELD_SUCCESS,
//   newValue,
//   name,
// });

export const changeToolState = (value) => ({
  type: CHANGE_TOOL_STATE,
  value: value.target.value,
});

export const submitAdLogin = (newValue, name) => ({
  type: SUBMIT_AD_LOGIN,
  newValue,
  name,
});

export const submitAdLoginSuccess = () => ({
  type: SUBMIT_AD_LOGIN_SUCCESS,

});



export const getFileUpload = (value) => ({
  type: GET_FILE_UPLOAD,
  value: value.target.value,
});

export const selectImage = (file) => ({
  type: SELECT_IMAGE,
  file,
});

export const inputDate = (date) => ({
  type: INPUT_DATE,
  date,
});

export const uploadFile = (event) => ({
  type: UPLOAD_FILE,
  event,

});

// export const getToolStateValue = () =>  ({
//   type: GET_TOOL_STATE_VALUE,
// });
