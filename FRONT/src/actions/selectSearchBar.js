export const CHANGE_CATEGORIES_INPUT = 'CHANGE_CATEGORIES_INPUT';
export const CHANGE_LOCALISATION_INPUT = 'CHANGE_LOCALISATION_INPUT';
export const RESEARCH_BUTTON = 'RESEARCH_BUTTTON';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_RADIUS = 'GET_RADIUS';
export const GET_RADIUS_SUCCESS = 'GET_RADIUS_SUCCESS';


export const changeCategoriesInput = (value) => ({
  type: CHANGE_CATEGORIES_INPUT,
  value,
});

export const changeLocalisationInput = (value) => ({
  Type: CHANGE_LOCALISATION_INPUT,
  value,
});

export const researchButton = () => ({
  type: RESEARCH_BUTTON,
});

export const getCategories = (value) => ({
  type: GET_CATEGORIES,
  value,
});

export const getCategoriesSuccess = () => ({
  type: GET_CATEGORIES_SUCCESS,
  categories: state.categories,

});

export const getRadius = (value) => ({
  type: GET_RADIUS,
  value,
});

export const getRadiusSuccess = () => ({
  type: GET_RADIUS_SUCCESS,
  categories: state.categories,

});



//export const GET_SELECT = 'GET_SELECT';
//export const GET_SELECT_SUCCESS = 'GET_SELECT_SUCCESS';
//export const RESEARCH_POSTCODE = 'RESEARCH_POSTCODE';

//export const researchPostcode = () => ({
// type: RESEARCH_POSTCODE,
//});


{/*export const getSelect = () => ({
  type: GET_SELECT,
});

export const getsELECTSuccess = (apiData) => ({
  type: GET_SELECT_SUCCESS,
  apiData,
});*/}



