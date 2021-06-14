import { CHANGE_AD_FIELD, GET_TOOL_STATE } from 'src/actions/adForm';

const initialState = {
  toolName: "",
  image: "",
  price: "",
  caution: "",
  description:"",
  toolState:"",
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        case CHANGE_AD_FIELD:
        return {
            ...state,
            [action.name]: action.newValue,
            
        };

        case GET_TOOL_STATE:
          return {
            ...state,
            toolState: action.value,
          }
        default:
            return state;
    }
};

export default reducer;
