import { CHANGE_AD_FIELD,CHANGE_AD_FIELD_SUCCESS, CHANGE_TOOL_STATE, SUBMIT_AD_LOGIN, SUBMIT_AD_LOGIN_SUCCESS, INPUT_DATE, UPLOAD_FILE, SELECT_IMAGE } from 'src/actions/adForm';


const initialState = {
  title: "",
  picture_id: "",
  price:"",
  deposit: "",
  description: "",
  product_state: "",
  postcode: "",
  category_id: "",

  selectedFile:null,

 // date: [new Date()],

};

const reducer = (state = initialState, action) => {

    switch (action.type){
        case CHANGE_AD_FIELD:
        return {
            ...state,
            [action.name]: action.newValue,
            
        };

        case CHANGE_AD_FIELD_SUCCESS:
        return {
            ...state,
            title: action.title,
              price: action.price,
              picture_id: action.picture_id,
              product_state: action.product_state,
              deposit: action.deposit,
              description: action.description,
              ad_type: action.ad_type,
              postcode: action.postcode,
              category_id: action.category_id,
        };

        case SUBMIT_AD_LOGIN:
          return {
            ...state,
            state: action.value,
          };

          case SUBMIT_AD_LOGIN_SUCCESS:
            return {
              ...state,
              title: action.title,
              price: action.price,
              picture_id: action.picture_id,
              product_state: action.product_state,
              deposit: action.deposit,
              description: action.description,
              ad_type: action.ad_type,
              postcode: action.postcode,
              category_id: action.category_id,
            };

        case CHANGE_TOOL_STATE:
          return {
            ...state,
            // ici toolState recoit un objet au lieu de string
            product_state: action.value,
          };


          case SELECT_IMAGE:
            return {
              ...state,
              selectedFile: action.file,
            };

        // case INPUT_DATE:
        //   return {
        //     ...state,
        //     date: action.date,
        //   };

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
