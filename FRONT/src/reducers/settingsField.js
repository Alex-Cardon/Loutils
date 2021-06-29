import { CHANGE_SETTINGS_INPUT, SIGNUP_SUCCESS } from 'src/actions/settingsField';

//! state
export const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  token:'',
  msg:'',
  signUp: false,
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
 // console.log('je suis dans le reducer settings');
  switch (action.type) {
    case CHANGE_SETTINGS_INPUT:
      
      return {
        ...state, 
          [action.settingsKey]: action.newValue,
      };
      case SIGNUP_SUCCESS:   
      return {
        ...state,
        msg:action.msg,
        token:action.token,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        signUp: true,
      };
    default:
      return state;
  }
};

export default reducer;
