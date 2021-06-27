import { CHANGE_PICTURE_INPUT, UPDATED_PICTURE_SUCCESS } from 'src/actions/updatedProfil';

//! state
export const initialState = {
  name: "",
  email: "",
  //phone: "",
  password: "",
  confirmPassword: "",
  picture:"",
  //token:'',
 // msg:'',
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
       // msg:action.msg,
       // token:action.token,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    default:
      return state;
  }
};

export default reducer;
