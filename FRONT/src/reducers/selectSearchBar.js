import { CHANGE_CATEGORIES_INPUT, CHANGE_LOCALISATION_INPUT } from 'src/actions/selectSearchBar';

//! state
export const initialState = {
  title:"",
  categories: "",
  postcode: "",
  radius:"",
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action ) => {
  //console.log('je suis dans le reducer selectSearchBar');
  switch (action.type) {
    case CHANGE_CATEGORIES_INPUT:
    
      return {
        ...state, 
        title: action.value,   
      };
      case CHANGE_LOCALISATION_INPUT:
      
      return {
        ...state, 
        postcode: action.value,   
      };
    default:
      return state;
  }
};

export default reducer;
