import { 
  CHANGE_PICTURE_INPUT, 
  UPDATED_PICTURE_SUCCESS,  
  SUBMIT_UPDATED_PROFIL, 
  SUBMIT_UPDATED_PROFIL_SUCCESS
} from 'src/actions/updatedProfil';

//! state
export const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  updatedProfil: false,
  
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
  //console.log('je suis dans le reducer updated profil');
  switch (action.type) {
    case CHANGE_PICTURE_INPUT:
      
      return {
        ...state, 
          picture:state, 
      };
      case UPDATED_PICTURE_SUCCESS:   
      return {
        ...state,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };

      // case SUBMIT_UPDATED_PROFIL:
      // return {
      //   ...state, 
      //   [action.settingsKey]: action.newValue,   
      // };

      case SUBMIT_UPDATED_PROFIL_SUCCESS:   
      return {
        ...state,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        updatedProfil: true,
      };
    default:
      return state;
  }
};

export default reducer;
