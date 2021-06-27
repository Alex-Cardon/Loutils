import {
  CHANGE_CATEGORIES_INPUT,
  CHANGE_LOCALISATION_INPUT,
  GET_CATEGORIES,
  GET_RADIUS,
  
} from 'src/actions/selectSearchBar';

//! state
export const initialState = {

  select: {},

};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer selectSearchBar');
  switch (action.type) {
    case CHANGE_CATEGORIES_INPUT:

      return {
        ...state,
        select: action.value,
      };
    case CHANGE_LOCALISATION_INPUT:

      return {
        ...state,
        select: action.value,
      };
    case GET_RADIUS:
      return {
        ...state,
        select: action.value,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        select: action.value,
      };

    default:
      return state;
  }
};

export default reducer;




{/*  GET_CATEGORIES_SUCCESS,
GET_RADIUS_SUCCESS
case GET_RADIUS_SUCCESS:
      return {
        ...state,
        select: action.apiData
      };
      case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        select: action.apiData
      };*/}
