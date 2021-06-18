const {
    insertSchema : insertAdSchema,
    updateSchema : updateAdSchema,
    searchSchema : searchAdSchema,
    getByIdSchema : getByIdAdSchema
} = require('./adSchema');

const {
    newBookingSchema : newBookingASchema,
    removeBookingSchema:removeBookingASchema,
    getBookingSchema: getBookingASchema
} = require('./bookingSchema');

const {
    newBookmarkSchema : newBookmarkASchema,
    removeBookmarkSchema:removeABookmarkSchema
} = require('./bookmarkSchema');

const {
    newRatingSchema : newRatingASchema,
    avgRatingSchema: avgRatingASchema
} = require('./ratingSchema');

const {
    postMessageSchema : messagePostMessageSchema,
    removeMessageSchema : removeAMessageSchema
} = require('./messageSchema');

const {
    newSavedSearchSchema : newASavedSearchSchema,
    updateSavedSearchSchema : updateASavedSearchSchema,
    deleteSavedSearchSchema: deleteASavedSearchSchema
} = require('./savedSearchSchema');


const {
    insertSchema: insertASchema,
    loginSchema: loginASchema,
    updateInfoSchema: updateAInfoSchema,
    updatePasswordSchema: updateAPasswordSchema,
} = require('./userSchema');



module.exports = {
    insertAdSchema,
    updateAdSchema,
    searchAdSchema,
    getByIdAdSchema,

    newBookingASchema,
    removeBookingASchema,
    getBookingASchema,

    newBookmarkASchema,
    removeABookmarkSchema,

    newRatingASchema,
    avgRatingASchema,

    messagePostMessageSchema,
    removeAMessageSchema,

    newASavedSearchSchema,
    updateASavedSearchSchema,
    deleteASavedSearchSchema,

    insertASchema,
    loginASchema,
    updateAInfoSchema,
    updateAPasswordSchema

};

