
import { CHANGE_LOGIN_FIELD, LOGIN_SUCCESS, LOGOUT,  TOGGLE_SETTINGS } from 'src/actions/loginForm';

export const initialState = {
  isLogged: false,  
  email: '',
  password: '',
  name: null,
  token: null,
  isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  //console.log('je suis dans le reducer Login');
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        // je veux mettre dans la clé
        // qui s'apelle comme la variable action.name
        // la valeur de action.newValue
        [action.name]: action.newValue,
      };
    case LOGOUT:
      return {
        ...state,
        isOpen: false,
        isLogged: false,
        name: null,
        token: null,
        

      };
      case LOGIN_SUCCESS:   
      return {
        ...state,
        name:action.name,
        token:action.token,
        isLogged:true,
        isOpen:true,
        email: '',
        password: '',
      };
      case TOGGLE_SETTINGS:
      return {
        ...state,
       
          // j'inverse isOpen
          // par rapport a l'ancienen valeur
          // dans le state
          isOpen: !state.isOpen,
        
      };

    default:
      return state;
  }
};

export default reducer;
