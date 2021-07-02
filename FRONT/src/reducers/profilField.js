import { CHANGE_UPDATED_PROFIL_INPUT, UPDATED_PROFIL_SUCCESS } from 'src/actions/profilField';
import { GET_PROFILE_INFO } from '../actions/updatedProfil';

//! state
export const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  msg:"",

};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
  //console.log('je suis dans le reducer updated profil');
  switch (action.type) {
    case CHANGE_UPDATED_PROFIL_INPUT:
     
      return {
        ...state, 
          [action.settingsKey]: action.newValue,
      };
      case UPDATED_PROFIL_SUCCESS:   
      return {
        ...state,
        msg:action.msg,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',

      };
      case GET_PROFILE_INFO:
        return {
          ...state,
          name: action.profil.name,
          email: action.profil.email
        }
    default:
      return state;
  }
};

export default reducer;
