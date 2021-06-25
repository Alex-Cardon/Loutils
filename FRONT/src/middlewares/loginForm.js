//! Terminé 

import axios from 'axios';

import { SUBMIT_LOGIN, loginSuccess } from 'src/actions/loginForm';

const loginFormMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      // avec getstate on apporte le state dans le MW
        const state = store.getState();
      axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/login', {
          "email": state.user.email, 
          "password": state.user.password,
        })
        .then((response)=>{
            const { name , token} = response.data
            store.dispatch(loginSuccess(name, token))
        })
        .catch((error)=>console.log(error))
        break;
    }
    default:
      next(action);
  }
}


export default loginFormMiddleware;

