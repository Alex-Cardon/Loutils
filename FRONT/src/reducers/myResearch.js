import { GET_MY_RESEARCH, GET_MY_RESEARCH_SUCCESS } from 'src/actions/myResearch';


export const initialState = {
  title: "",
  category: "",
  postcode: "",
  radius: "",
  loading: false,

}; 

const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer myResearch');
  switch (action.type) {
    case GET_MY_RESEARCH:
      return {
        ...state,
        loading: true,
      };
    case GET_MY_RESEARCH_SUCCESS:
      return {
        ...state,
        title: action.title,
        category: action.category,
        postcode: action.postcode,
        radius: action.radius,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;

