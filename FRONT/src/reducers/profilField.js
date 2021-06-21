import { CHANGE_UPDATED_PROFIL_INPUT, UPDATED_PROFIL_SUCCESS } from 'src/actions/profilField';

//! state
export const initialState = {
  name: "",
  email: "",
  //phone: "",
  password: "",
  confirmPassword: "",
  //token:'',
 // msg:'',
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
  //console.log('je suis dans le reducer updated profil');
  switch (action.type) {
    case CHANGE_UPDATED_PROFIL_INPUT:
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
      case UPDATED_PROFIL_SUCCESS:   
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
