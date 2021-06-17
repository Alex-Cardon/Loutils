import { CHANGE_RESEARCH_INPUT } from 'src/actions/searchBar';

//! state
export const initialState = {
  searchValue: "",
  
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
  //console.log('je suis dans le reducer searchBar');
  switch (action.type) {
    case CHANGE_RESEARCH_INPUT:
      // on renvoie un nouvel objet "state"
      return {
        ...state, 
        searchValue: action.value,   
      };
    default:
      return state;
  }
};

export default reducer;

//!
//! Ne pas oublier de le créer dans index.js du dossier Réducers
//!
