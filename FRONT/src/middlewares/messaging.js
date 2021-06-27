// //! Terminé 

// import axios from 'axios';
// //import { Message } from 'semantic-ui-react';

// import { SEND_MESSAGE } from 'src/actions/messaging';

// const loginFormMiddleware = (store) => (next) => (action) => {
//   switch (action.type) {
//     case SEND_MESSAGE: {
//       // avec getstate on apporte le state dans le MW
//         const state = store.getState();
//       axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/login', {
//           "content": state.Message.inputValue, 
//           // "recipient": state,
//           // "ad_id": state,
//         })
//         .then((response)=>{
//             //const { name , token} = response.data
//             store.dispatch(loginSuccess(name, token))
//         })
//         .catch((error)=>console.log(error))
//         break;
//     }
//     default:
//       next(action);
//   }
// }


// export default loginFormMiddleware;

