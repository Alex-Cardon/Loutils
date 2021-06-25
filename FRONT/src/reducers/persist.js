import { LOGIN_SUCCESS, LOGOUT } from 'src/actions/loginForm'

export const initialState = { 

  isLogged: false,
  token: '',
}

const persistStorageReducer = (state = initialState, action = {}) =>{
  switch (action.type) {
    case LOGIN_SUCCESS : 
      return{
        ...state,
        isLogged: true,
        token: action.token,
      };
    case LOGOUT :
      return {
        ...state,
        isLogged: false
      };
    default: 
      return state;
  }
};

export default persistStorageReducer
