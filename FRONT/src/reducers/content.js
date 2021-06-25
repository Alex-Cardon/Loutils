import { GET_CONTENT, GET_CONTENT_SUCCESS } from 'src/actions/content';

//route : http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/randads
//! state
export const initialState = {

  content: {},

};
//! direction index.js de mon reducer
const reducer = (state = initialState, action) => {
  console.log('je suis dans le reducer Content');
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
      };
    case GET_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.apiData

      };
    default:
      return state;
  }
};

export default reducer;

//!
//! Ne pas oublier de le créer dans index.js du dossier Réducers
//!

