import { CHANGE_CATEGORIES_INPUT, CHANGE_LOCALISATION_INPUT } from 'src/actions/selectSearchBar';

//! state
export const initialState = {
  tools:"",
  localisation: "",
  category: "",
  distance:"",
  
  
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
  //console.log('je suis dans le reducer selectSearchBar');
  switch (action.type) {
    case CHANGE_CATEGORIES_INPUT:
      // on renvoie un nouvel objet "state"
      return {
        ...state, 
        tools: action.value,   
      };
      case CHANGE_LOCALISATION_INPUT:
      // on renvoie un nouvel objet "state"
      return {
        ...state, 
        localisation: action.value,   
      };
    default:
      return state;
  }
};

export default reducer;

//!
//! Ne pas oublier de le créer dans index.js du dossier Réducers
//!
