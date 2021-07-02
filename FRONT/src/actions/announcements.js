export const GET_ANNOUNCEMENTS= 'GET_ANNOUNCEMENTS';
export const GET_ANNOUNCEMENTS_SUCCESS = 'GET_ANNOUNCEMENTS_SUCCESS';
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const DELETE_BOOKING_SUCCESS = 'DELETE_BOOKING_SUCCESS';

// action qui déclenche la requete
export const getAnnouncements = () => ({
  type: GET_ANNOUNCEMENTS,
});

// action lorsque la réponse arrive
export const getAnnouncementsSuccess = (apiData) => ({
  type: GET_ANNOUNCEMENTS_SUCCESS,
  apiData,
});

export const deleteBooking = (adId) => ({
  type: DELETE_BOOKING,
  adId,
});

export const deleteBookingSuccess = (msg) => ({
  type: DELETE_BOOKING_SUCCESS,
  msg,
});
