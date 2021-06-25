import { GET_FAVORITES, GET_FAVORITES_SUCCESS } from 'src/actions/favorites';


export const initialState = {
  id: "",
  image: "",
  name: "",
  description: "",
  price: "",
  loading: false,

}; // TODO en construction

const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer favorites');
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        loading: true,
      };
      case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        id: action.id,
        image: action.image,
        name: action.name,
        description: action.title,
        price: action.price,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
