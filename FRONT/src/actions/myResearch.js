export const GET_MY_RESEARCH = 'GET_MY_RESEARCH';
export const GET_MY_RESEARCH_SUCCESS = 'GET_MY_RESEARCH_SUCCESS';


// action qui déclenche la requete
export const getMyResearch = () => ({
  type: GET_MY_RESEARCH,
});

// action lorsque la réponse arrive
export const getMyResearchSuccess = () => ({
  type: GET_MY_RESEARCH_SUCCESS,
  id: state.id,
  image: state.image,
  title: state.title,
  description: state.description,
  price: state.price,
});
