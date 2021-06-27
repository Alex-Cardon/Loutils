import axios from 'axios';
import { useEffect } from 'react';

useEffect(()=> {
  setAsked(ref.current);
  if(localStorage.getItem('adStorageDate')){
    const date = localStorage.getItem('adStorageDate')
    checkDataAge(date);
  }
}, [ref]);


  //! creation d'une annonce 

  // const handleFileUpload = (event) => {
  //   let files = event.target.files;
console.log("adForm middleware ligne 17");


import {
  CHANGE_AD_FIELD, /*quand tape input, garde les caractères dedans */
  changeAdField,
  SUBMIT_AD_LOGIN, /*permet de publier l'annonce */
  submitAdLogin,
} from 'src/actions/adForm';

const adFormMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_AD_FIELD:
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/AdForm`)
        .then((response) => {
          console.log('response de CHANGE_AD_FIELD', response.data)
          store.dispatch(changeAdField(response.data));
        })
        .catch((error) => console.log(error))
       
      break
        default:
    case SUBMIT_AD_LOGIN:
      axios.post(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/AdForm`)
              .then((response) => {
                console.log('response de SUBMIT_AD_LOGIN', response.data)//
                store.dispatch(submitAdLogin(response.data));//
              })
              .catch((error) => console.log(error))
            break
            default:
            next(action);
            break;
  }
}




/*import { GET_FILE_UPLOAD } from 'src/actions/loginForm';

const adFormMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case GET_FILE_UPLOAD: {


        if(localStorage.getItem(store)){
          store.dispatch(loginSuccess(JSON.parse.localStorage.getItem(store)));
          setLoading(false);
        }else{
        const state = store.getState();
        axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/login', {
            email: state.user.email, 
            password: state.user.password,
          })
          .then((response)=>{
            console.log(response);
              store.dispatch(loginSuccess(response.data));
              setLoading(false);
  
              localStorage.setItem(store, JSON.stringify(response.data));
              if(!localStorage.getItem('adStorageDate')){
                localStorage.setItem('adStorageDate', Date.now());
              }
  
  
          })
          .catch((error)=>console.log(error))
          break;
        }

      
    }
    default:
      next(action);
  }
}*/


export default adFormMiddleware;

/*const adFormMiddleware = (store) => (next) => (action) => {
  console.log("adForm middleware ligne 33");
  switch (action.type) {
    case GET_FILE_UPLOAD: {

      console.log("adForm middleware case GET_FILE_UPLOAD ligne 37");
        if(localStorage.getItem(store)){
        store.dispatch(loginSuccess(JSON.parse.localStorage.getItem(store)));
          setLoading(false);
        }else{
          // avec getstate on apporte le state dans le MW
        const state = store.getState();
        console.log("state",state);

        axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/ad', {
          title: state.ad.title,
          image: state.ad.image,
          price: state.ad.price,
          deposit: state.ad.deposit,
          description: state.ad.description,
          product_state: state.ad.product_state,
          postcode: state.ad.postcode,
          })

          console.log("AdForm Container : title",title,
          "image",image,
          "price",price,
          "deposit",deposit,
          "description",description,
          "product_state",product_state,
          "postcode",postcode)

          .then((response)=>{
            console.log(response);
              store.dispatch(loginSuccess(response.data));
              setLoading(false);
  
              localStorage.setItem(store, JSON.stringify(response.data));
              if(!localStorage.getItem('adStorageDate')){
                localStorage.setItem('adStorageDate', Date.now());
              }
  
  
          })
          .catch((error)=>console.log(error))
          break;
        }

      

    }
    default:
      next(action);
  }
}
*/
/*const checkDataAge = date => {
  const today = Date.now();
  const timeDifference = today - date;
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  console.log("adForm middleware ligne 22");
  if(daysDifference >=1){
    localStorage.clear();
    localStorage.setItem('adStorageDate', Date.now());
  }
  console.log(checkDataAge);
}*/
