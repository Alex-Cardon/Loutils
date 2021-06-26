import axios from 'axios';

import {
  RESEARCH_TITLE,
  changeCategoriesInput,
  RESEARCH_POSTCODE,
  changeLocalisationInput,
  GET_CATEGORIES,
  getCategoriesSuccess,
  GET_RADIUS,
  getRadiusSuccess,
} from 'src/actions/selectSearchBar';


const selectSearchBarMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
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
      break
    case RESEARCH_TITLE:
      const state = store.getState();
      axios.post(
        `http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/categories`, {
        "inputTools": state.research.inputTools,
      })
        .then((response) => {
          console.log('response de RESEARCH_TITLE', response.data)
          store.dispatch(changeCategoriesInput(response.data));
         
        })
        .catch((error) => console.log(error))
      break
    case RESEARCH_POSTCODE:
      axios.post(
        `http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/radius`, {
        "inputLocalisation": state.research.inputLocalisation,
      })
        .then((response) => {
          console.log('response de RESEARCH_POSTCODE', response.data)
          store.dispatch(changeLocalisationInput(response.data));
          
        })
        .catch((error) => console.log(error))
      break
    default:
      next(action);
      break;
  }
};

export default selectSearchBarMiddleware;
