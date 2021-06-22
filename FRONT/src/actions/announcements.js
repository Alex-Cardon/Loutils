export const GET_ANNOUNCEMENTS= 'GET_ANNOUNCEMENTS';
export const GET_ANNOUNCEMENTS_SUCCESS = 'GET_ANNOUNCEMENTS_SUCCESS';


// action qui déclenche la requete
export const getAnnouncements = () => ({
  type: GET_ANNOUNCEMENTS,
});

// action lorsque la réponse arrive
export const getAnnouncementsSuccess = (recipes) => ({
  type: GET_ANNOUNCEMENTS_SUCCESS,
  id: state.id,
  image: state.image,
  title: state.title,
  description: state.description,
  price: state.price,
});
