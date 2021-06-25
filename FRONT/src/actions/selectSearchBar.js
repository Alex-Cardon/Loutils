export const CHANGE_CATEGORIES_INPUT = 'CHANGE_CATEGORIES_INPUT';
export const CHANGE_LOCALISATION_INPUT = 'CHANGE_LOCALISATION_INPUT';
export const RESEARCH_TITLE = 'RESEARCH_TITLE';
export const RESEARCH_POSTCODE = 'RESEARCH_POSTCODE';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_RADIUS = 'GET_RADIUS';
export const GET_RADIUS_SUCCESS = 'GET_RADIUS_SUCCESS';


export const changeCategoriesInput = (value) => ({
  type: CHANGE_CATEGORIES_INPUT,
  value,
});

export const changeLocalisationInput = (value) => ({
  type: CHANGE_LOCALISATION_INPUT,
  value,
});

export const researchTitle = () => ({
  type: RESEARCH_TITLE,
});

export const researchPostcode = () => ({
  type: RESEARCH_POSTCODE,
});

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const getCategoriesSuccess = () => ({
  type: GET_CATEGORIES_SUCCESS,
  categories: state.categories,
  
});

export const getRadius = () => ({
  type: GET_RADIUS,
});

export const getRadiusSuccess = () => ({
  type: GET_RADIUS_SUCCESS,
  categories: state.categories,
  
});


