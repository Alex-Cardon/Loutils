import axios from 'axios';

import {
  GET_MY_RESEARCH,
  getMyResearchSuccess,
} from 'src/actions/myResearch';


const myResearchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MY_RESEARCH:


      axios.get(`http://localhost:3000/savedResearch`,
      { 
        title: state.my.title,
        category: state.my.category,
        postcode: state.my.postcode,
        radius: state.my.radius,
      })
        .then((response) => {
          console.log('response de myResearch', response.data)
          store.dispatch(getMyResearchSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default myResearchMiddleware;
