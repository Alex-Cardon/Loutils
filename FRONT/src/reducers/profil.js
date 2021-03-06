import { GET_PROFIL, GET_PROFIL_SUCCESS, DELETE_ACCOUNT_SUCCESS } from 'src/actions/profil';

//! state
export const initialState = {
  
  profil: {},
  deleteAccount: false,
 
}; 

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_PROFIL:
      return {
        ...state,
      };
    case GET_PROFIL_SUCCESS:
      return {
        ...state,
        profil: action.apiData,
    
      };
      case DELETE_ACCOUNT_SUCCESS:
        return {
        ...state,
        profil: action.msg,
        deleteAccount: true,
        
        };
    default:
      return state;
  }
};

export default reducer;


