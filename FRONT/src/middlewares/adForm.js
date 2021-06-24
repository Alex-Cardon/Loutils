
import axios from 'axios';
import { useEffect } from 'react';

useEffect(()=> {
  setAsked(ref.current);
  if(localStorage.getItem('adStorageDate')){
    const date = localStorage.getItem('adStorageDate')
    checkDataAge(date);
  }
}, [ref]);

const checkDataAge = date => {
  const today = Date.now();
  const timeDifference = today - date;
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  if(daysDifference >=1){
    localStorage.clear();
    localStorage.setItem('adStorageDate', Date.now());
  }

}

import { GET_FILE_UPLOAD } from 'src/actions/loginForm';

const adFormMiddleware = (store) => (next) => (action) => {

  // const handleFileUpload = (event) => {
  //   let files = event.target.files;

  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);

  //   reader.onload = (event) => {
  //     console.warn("img data:", event.target.result);

  //     const url = "http://localhost......";
  //     const formData = {file: event.target.result}
  //     return postMessage(url, FormData)
  //       .then()
  //   }

  // };



  switch (action.type) {
    case GET_FILE_UPLOAD: {


        /* */if(localStorage.getItem(store)){
          /**/store.dispatch(loginSuccess(JSON.parse.localStorage.getItem(store)));
          /* */setLoading(false);
        }else{
          // avec getstate on apporte le state dans le MW
        const state = store.getState();
        axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/login', {
            email: state.user.email, 
            password: state.user.password,
          })
          .then((response)=>{
            /* */console.log(response);
            /*setCaracterInfos(response.data) */
              store.dispatch(loginSuccess(response.data));
              /* */setLoading(false);
  
              /**/localStorage.setItem(store, JSON.stringify(response.data));
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


export default adFormMiddleware;

