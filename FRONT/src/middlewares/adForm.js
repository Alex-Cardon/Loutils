import axios from 'axios';
import {
  useEffect
} from 'react';

/*useEffect(()=> {
  setAsked(ref.current);
  if(localStorage.getItem('adStorageDate')){
    const date = localStorage.getItem('adStorageDate')
    checkDataAge(date);
  }
}, [ref]);


  //! creation d'une annonce 

  // const handleFileUpload = (event) => {
  //   let files = event.target.files;
console.log("adForm middleware ligne 17");*/


import {
  CHANGE_AD_FIELD,
  /*quand tape input, garde les caractères dedans */
  changeAdFieldSuccess,
  SUBMIT_AD_LOGIN,
  /*permet de publier l'annonce */
  submitAdLoginSuccess,
  adPosted,
} from 'src/actions/adForm';

const adFormMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case CHANGE_AD_FIELD:
    //   axios.get(`http://localhost:3000/account/ads`)
    //     .then((response) => {
    //       console.log('response de CHANGE_AD_FIELD', response.data)
    //       store.dispatch(changeAdFieldSuccess(response.data));
    //     })
    //     .catch((error) => console.log(error))

    //   break;

    case SUBMIT_AD_LOGIN:
      const state = store.getState();
      console.log(state);

      const options = {
        method: 'POST',
        url: 'http://localhost:3000/account/ads',
        headers: {
          'Content-Type': 'application/json',
          token: state.user.token
        },
        data: {
          title: state.ad.title,
          price: state.ad.price,
          picture_id: state.ad.picture_id,
          product_state: state.ad.product_state,
          deposit: state.ad.deposit,
          description: state.ad.description,
          postcode: state.ad.postcode,
          category_id: state.ad.category_id
        }
      };

      axios.request(options).then((response) => {
        console.log('response de SUBMIT_AD_LOGIN', response.data) //
        store.dispatch(submitAdLoginSuccess(response.data)); //
      })
        .catch((error) => console.log('log error axios', error))
      break;

    default:
      next(action);
  }
}
/*
{
  "title": "Marteau qui martelle",
  "price": 5,
  "picture_id": "5",
  "product_state": "Comme neuf",
  "deposit": 20,
  "description": "Mateau qui martelle, parfait pour marteller ",
  "ad_type": "je loue",
  "postcode":"59680",
  "category_id": 1
}
*/

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

        axios.post('http://localhost:3000/ad', {
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
