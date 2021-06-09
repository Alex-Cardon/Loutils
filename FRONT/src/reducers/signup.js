
import { HANDLE_FORM_SUBMIT, HANDLE_INPUT_CHANGE } from 'src/actions/signup';

export const initialState = {
  pseudo: "morice",
  email: "email",
  phone: "013255",
  password: "state.password",
  confirmPassword: "state.confirmPassword",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        // je veux mettre dans la clé
        // qui s'apelle comme la variable action.name
        // la valeur de action.newValue
        [action.name]: action.newValue,
      };

    case HANDLE_FORM_SUBMIT:
      return {
        ...state,
        pseudo: action.pseudo,
        email: action.email,
        phone: action.phone,
        password: action.password,
        confirmPassword: action.confirmPassword,
      };

    // case LOGOUT:
    //   return {
    //     ...state,
    //     isLogged: false,
    //     nickname: null,
    //     token: null,
    //   };

    default:
      return state;
  }
};

export default reducer;
