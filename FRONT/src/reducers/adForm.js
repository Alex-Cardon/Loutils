import { CHANGE_AD_FIELD, CHANGE_TOOL_STATE, SUBMIT_AD_LOGIN, SELECT_IMAGE } from 'src/actions/adForm';

const initialState = {
  toolName: "",
  image: "",
  price: "",
  caution: "",
  description:"",
  toolState:"",
  selectedFile:null,
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

          case SELECT_IMAGE:
            return {
              ...state,
              selectedFile: action.file,
            };

        default:
            return state;
    }
};

export default reducer;
