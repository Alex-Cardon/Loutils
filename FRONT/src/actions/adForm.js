
export const CHANGE_AD_FIELD = 'CHANGE_AD_FIELD';

export const CHANGE_TOOL_STATE = 'CHANGE_TOOL_STATE';
export const SUBMIT_AD_LOGIN = 'SUBMIT_AD_LOGIN';

export const changeAdField = (newValue, name) => ({
  type: CHANGE_AD_FIELD,
  newValue,
  name,
});

export const changeToolState = (value) => ({
  type: CHANGE_TOOL_STATE,
  value: value.target.value,
});

// export const getWorkingValue = (value) => ({
//   type: GET_WORKING_VALUE,
//   value,
// });

export const submitAdLogin = () => ({
  type: SUBMIT_AD_LOGIN,
});
