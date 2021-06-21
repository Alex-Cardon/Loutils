import { GET_ANNOUNCEMENTS, GET_ANNOUNCEMENTS_SUCCESS } from 'src/actions/announcements';

//! state
export const initialState = {
  id: "",
  image: "",
  title: "",
  description: "",
  price: "",
  loading: false,

}; // TODO en construction
//! direction index.js de mon reducer
const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer GET_ANNOUNCEMENTS');
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return {
        ...state,
        loading: true,
      };
      case GET_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        id: action.id,
        image: action.image,
        title: action.title,
        description: action.title,
        price: action.price,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;

//!
//! Ne pas oublier de le créer dans index.js du dossier Réducers
//!

