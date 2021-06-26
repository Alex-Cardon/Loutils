import { GET_PROFIL, GET_PROFIL_SUCCESS, DELETE_ACCOUNT_SUCCESS } from 'src/actions/profil';

//! state
export const initialState = {
  //key: "",
  //image: "",
  //header: "",
  //description: "",
 // description: "",
  //msg:""
  profil: {},
}; 

const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer favorites');
  switch (action.type) {
    case GET_PROFIL:
      return {
        ...state,
       
      };
    case GET_PROFIL_SUCCESS:
      return {
        ...state,
        //key: state,
        //image: state,
        //header: state,
        //meta: state,
        //description: state,
        profil: action.apiData,
        
      };
      case DELETE_ACCOUNT_SUCCESS:
        return {
        ...state,
        msg: action.msg,
        };
    default:
      return state;
  }
};

export default reducer;


