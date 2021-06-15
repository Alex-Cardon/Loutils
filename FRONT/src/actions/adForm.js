
export const CHANGE_AD_FIELD = 'CHANGE_AD_FIELD';
export const GET_TOOL_STATE = 'GET_TOOL_STATE'

export const changeAdField = (newValue, name) => ({
  type: CHANGE_AD_FIELD,
  newValue,
  name,
});

export const getToolState = (value) => ({
  type: GET_TOOL_STATE,
  value,
});
