import {
  CHANGE_CATEGORIES_INPUT,
  CHANGE_LOCALISATION,
  GET_CATEGORIES,
  GET_RADIUS,
  RESEARCH_SUCCESS,
  NEW_RESEARCH_SUCCESS,
} from 'src/actions/selectSearchBar';

//! state
export const initialState = {
  title: '',
  postcode: '',
  radius: '',
  category: '',
  searchResult: {},
  apiResult: false,
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer selectSearchBar');
  switch (action.type) {
    case CHANGE_CATEGORIES_INPUT:

      return {
        ...state,
        title: action.value,
      };
    case CHANGE_LOCALISATION:

      return {
        ...state,
        postcode: action.value,
      };
    case GET_RADIUS:
      return {
        ...state,
        radius: action.value,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        category: action.value,
      };
    case RESEARCH_SUCCESS:
      return {
        ...state,
        searchResult: action.apiData, 
        apiResult: true,
      }
      case NEW_RESEARCH_SUCCESS:
        return {
          ...state,
          apiresult: false,
        }

    default:
      return state;
  }
};

export default reducer;



/*  GET_CATEGORIES_SUCCESS,
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
      };*/
