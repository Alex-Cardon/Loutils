import { LOGIN_SUCCESS, LOGOUT } from 'src/actions/loginForm'

export const initialState = { 

  isLogged: false,
  token: '',
}

const persistStorageReducer = (state = initialState, action = {}) =>{
  //console.log('je suis dans mon persist reducer')
  switch (action.type) {
    case LOGIN_SUCCESS : 
    console.log(action)
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
