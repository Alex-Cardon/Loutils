import { 
  GET_ONE_AD, 
  GET_ONE_AD_SUCCESS, 
  SEND_MESSAGE_FROM_ONE_AD_SUCCESS, 
} from 'src/actions/oneAd';



//! state
export const initialState = {

  oneAd: {},
  msgTxt: "",
  sendMsgSuccess: false,
};

//! direction index.js de mon reducer
const reducer = (state = initialState, action) => {
  //console.log('je suis dans le reducer oneAd');
  switch (action.type) {
    case GET_ONE_AD:
      return {
        ...state,
      };
    case GET_ONE_AD_SUCCESS:
      return {
        ...state,
        oneAd: action.apiData,
      };
      case SEND_MESSAGE_FROM_ONE_AD_SUCCESS:
        return {
          ...state,
          sendMsgSuccess: true,
        }
    default:
      return state;
  }
};
//console.log("reducer", reducer);
//console.log("oneAd reducer", oneAd);
export default reducer;

//!
//! Ne pas oublier de le créer dans index.js du dossier Réducers
//!

