import { GET_PROFIL, GET_PROFIL_SUCCESS } from 'src/actions/profil';

//! state
export const initialState = {
  key: "",
  image: "",
  header: "",
  description: "",
  description: "",
  loading: false,

}; // TODO en construction

const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer favorites');
  switch (action.type) {
    case GET_PROFIL:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFIL_SUCCESS:
      return {
        ...state,
        key: state,
        image: state,
        header: state,
        meta: state,
        description: state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;


