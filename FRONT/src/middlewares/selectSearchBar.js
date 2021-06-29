import axios from 'axios';

import {
  RESEARCH_BUTTON,
  researchSuccess,
  

} from 'src/actions/selectSearchBar';



const selectSearchBarMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case RESEARCH_BUTTON: { 
      const state = store.getState();
      axios.post(
        `http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/search`, {
        "title": state.research.title,
        "postcode": state.research.postcode, 
        "radius": state.research.radius,
        "category":state.research.category,

      })
        .then((response) => {
          console.log('response de RESEARCH_BUTTON', response.data.data[0])
          store.dispatch(researchSuccess(response.data));
          
        })
        .catch((error) => {
          console.log(error)
        });

      break;
    }  
    default:
      next(action);
   
  }
};

export default selectSearchBarMiddleware;






//! pour V2
/* 
  
  
  GET_CATEGORIES,
  RESEARCH_POSTCODE,
   getCategoriesSuccess,
  GET_RADIUS,
  getRadiusSuccess,
  
  
  case GET_CATEGORIES:
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/categories`, {
      })
        .then((response) => {
          console.log('response de GET_CATEGORIES', response.data)
          store.dispatch(getCategoriesSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break
    case GET_RADIUS:
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/radius`, {
      })
        .then((response) => {
          console.log('response de GET_RADIUS', response.data)
          store.dispatch(getRadiusSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break*/

/*  break
    case RESEARCH_POSTCODE:
      axios.post(
        `http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/radius`, {
        "inputLocalisation": state.research.inputLocalisation,
      })
        .then((response) => {
          console.log('response de RESEARCH_POSTCODE', response.data)
          store.dispatch(changeLocalisationInput(response.data));
          
        })
        .catch((error) => console.log(error))*/
