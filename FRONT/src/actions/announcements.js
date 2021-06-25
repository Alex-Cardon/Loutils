export const GET_ANNOUNCEMENTS= 'GET_ANNOUNCEMENTS';
export const GET_ANNOUNCEMENTS_SUCCESS = 'GET_ANNOUNCEMENTS_SUCCESS';
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const DELETE_BOOKING_SUCCESS = 'DELETE_BOOKING_SUCCESS';

// action qui déclenche la requete
export const getAnnouncements = () => ({
  type: GET_ANNOUNCEMENTS,
});

// action lorsque la réponse arrive
export const getAnnouncementsSuccess = () => ({
  type: GET_ANNOUNCEMENTS_SUCCESS,
  apiData,
});

export const deleteBooking = () => ({
  type: DELETE_BOOKING,
});

export const deleteBookingSuccess = (response) => ({
  type: DELETE_BOOKING_SUCCESS,
  msg: response.msg,
});
