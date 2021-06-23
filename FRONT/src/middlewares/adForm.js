
import axios from 'axios';

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

      // avec getstate on apporte le state dans le MW
        const state = store.getState();
      axios.post('http://localhost:3000/login', {
          email: state.user.email, 
          password: state.user.password,
        })
        .then((response)=>{
            store.dispatch(loginSuccess(response.data))
        })
        .catch((error)=>console.log(error))
        break;
    }
    default:
      next(action);
  }
}


export default adFormMiddleware;

