import { attempt } from 'joi';
import { CHANGE_AD_FIELD, CHANGE_TOOL_STATE, SUBMIT_AD_LOGIN, INPUT_DATE, UPLOAD_FILE } from 'src/actions/adForm';

const initialState = {
  toolName: "",
  image: "",
  price: "",
  caution: "",
  description:"",
  toolState:"",
  date: [new Date()],
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        case CHANGE_AD_FIELD:
        return {
            ...state,
            [action.name]: action.newValue,
            
        };

        case SUBMIT_AD_LOGIN:
          return {
            ...state,
            state: action.value,
          };

        case CHANGE_TOOL_STATE:
          return {
            ...state,
            // ici toolState recoit un objet au lieu de string
            toolState: action.value,
          };

        case INPUT_DATE:
          return {
            ...state,
            date: action.date,
          };

          case UPLOAD_FILE:
            return {
              ...state,
              files: action.value
            }

        default:
            return state;
    }
};

export default reducer;
