import { GET_SETTINGS_PAGE, GET_SETTINGS_PAGE_SUCCESS } from 'src/actions/settingsPage';

//! state
export const initialState = {
  id: "",
  image: "",
  title: "",
  description: "",
  price: "",
  

}; // TODO en construction
//! direction index.js de mon reducer
const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer SETTING PAGE');
  switch (action.type) {
    case GET_SETTINGS_PAGE:
      return {
        ...state,
       
      };
      case GET_SETTINGS_PAGE_SUCCESS:
      return {
        ...state,
        id: action.id,
        image: action.image,
        title: action.title,
        description: action.title,
        price: action.price,
        
      };
    default:
      return state;
  }
};

export default reducer;

//!
//! Ne pas oublier de le créer dans index.js du dossier Réducers
//!

