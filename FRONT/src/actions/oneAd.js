export const GET_ONE_AD = 'GET_ONE_AD';
export const GET_ONE_AD_SUCCESS = 'GET_ONE_AD_SUCCESS';
export const SEND_MESSAGE_FROM_ONE_AD = 'SEND_MESSAGE_FROM_ONE_AD';
export const SEND_MESSAGE_FROM_ONE_AD_SUCCESS = 'SEND_MESSAGE_FROM_ONE_AD_SUCCESS';

// action qui déclenche la requete
export const getOneAd = (id) => ({
  type: GET_ONE_AD,
  id,
});

// action lorsque la réponse arrive
export const getOneAdSuccess = (apiData) => ({
  type: GET_ONE_AD_SUCCESS,
  apiData,
});
console.log("action");
export const handleMessage = (msgTxt, userId, adId) => ({
  type: SEND_MESSAGE_FROM_ONE_AD,
  msgTxt, 
  userId, 
  adId,
});
 export const sendMessageFromOneAdSuccess = (apiData) => ({
   type: SEND_MESSAGE_FROM_ONE_AD_SUCCESS,
   apiData,
 })



//console.log(getOneAd, getOneAdSuccess);
