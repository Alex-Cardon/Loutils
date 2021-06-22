
export const CHANGE_AD_FIELD = 'CHANGE_AD_FIELD';

export const UPLOAD_FILE = "UPLOAD_FILE"

export const CHANGE_TOOL_STATE = 'CHANGE_TOOL_STATE';
export const SUBMIT_AD_LOGIN = 'SUBMIT_AD_LOGIN';
export const INPUT_DATE = 'INPUT_DATE';

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

export const inputDate = (date) => ({
  type: INPUT_DATE,
  date,
});

export const uploadFile = (event) => ({
  type: UPLOAD_FILE,
  event,
});
