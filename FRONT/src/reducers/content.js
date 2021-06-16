/*import {  } from 'src/actions/content';

//! state
export const initialState = {
  id:"",
  image: "",
  title: "",
  description:"",
  price:"",
  
}; // TODO en construction
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
  //console.log('je suis dans le reducer searchBar');
  switch (action.type) {
    case //!CHANGE_CATEGORIES_INPUT:
      // on renvoie un nouvel objet "state"
      return {
        ...state, 
        id: action.value,
        image:action.value,
        title: action.value,
        description:action.value,
        price:action.value,
      
          
      };
      
    default:
      return state;
  }
};

export default reducer;

//!
//! Ne pas oublier de le créer dans index.js du dossier Réducers
//!
*/
