export const CHANGE_CATEGORIES_INPUT = 'CHANGE_CATEGORIES_INPUT';
export const CHANGE_LOCALISATION_INPUT = 'CHANGE_LOCALISATION_INPUT';
export const RESEARCH = 'RESEARCH';


export const changeCategoriesInput = (value) => ({
  type: CHANGE_CATEGORIES_INPUT,
  value,
});

export const changeLocalisationInput = (value) => ({
  type: CHANGE_LOCALISATION_INPUT,
  value,
});

export const research = () => ({
  type: RESEARCH,
});

