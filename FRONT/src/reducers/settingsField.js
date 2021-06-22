import { CHANGE_SETTINGS_INPUT, SIGNUP_SUCCESS } from 'src/actions/settingsField';

//! state
export const initialState = {
  name: "",
  email: "",
  //phone: "",
  password: "",
  confirmPassword: "",
  token:'',
  msg:'',
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
 // console.log('je suis dans le reducer settings');
  switch (action.type) {
    case CHANGE_SETTINGS_INPUT:
      // on renvoie un nouvel objet "state"
      return {
        ...state, // on recopie tout l'ancien state
        // on crée une nouvelle clé settings
        // nouvelle syntaxe !
          // on peut utiliser une variable comme clé
          // en l'entourant de []
          // ici, la valeur de action.settingsKey
          // deviendra la clé
          // et on mettra dedans la nouvelle valeur
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
      };
    default:
      return state;
  }
};

export default reducer;
