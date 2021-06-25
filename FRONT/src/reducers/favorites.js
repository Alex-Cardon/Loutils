import { GET_FAVORITES, GET_FAVORITES_SUCCESS } from 'src/actions/favorites';


export const initialState = {
favorites: {},
}; // TODO en construction

const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer favorites');
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
      };
      case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.apiData
      };
    default:
      return state;
  }
};

export default reducer;
