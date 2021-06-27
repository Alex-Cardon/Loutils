import { GET_ANNOUNCEMENTS, GET_ANNOUNCEMENTS_SUCCESS, DELETE_BOOKING_SUCCESS } from 'src/actions/announcements';

//! state
export const initialState = {
  announcements: {
    ad_id: 7,
    recipient: 2,
  }, 
}; // TODO en construction
//! direction index.js de mon reducer
const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer GET_ANNOUNCEMENTS');
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return {
        ...state,
      };
    case GET_ANNOUNCEMENTS_SUCCESS:
    return {
      ...state,
      announcements: action.apiData
    };
    case DELETE_BOOKING_SUCCESS:
      return {
      ...state,
      msg: action.msg,
      };
    default:
      return state;
  }
};

export default reducer;

//!
//! Ne pas oublier de le créer dans index.js du dossier Réducers
//!

