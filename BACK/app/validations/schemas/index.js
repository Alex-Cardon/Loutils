const {
    insertSchema : insertAdSchema,
    updateSchema : updateAdSchema,
    searchSchema : searchAdSchema,
    getByIdSchema : getByIdAdSchema,
    getAdByIdSchema: getAnAdByIdSchema
} = require('./adSchema');

const {
    getUserInfoAdmin : getAnUserInfoAdmin,
    modifyRoleAdmin: modifyARoleAdmin,
    deleteUserAdmin: deleteAnUserAdmin
   
} = require('./adminSchema');

const {
    newBookingSchema : newBookingASchema,
    removeBookingSchema:removeBookingASchema
} = require('./bookingSchema');

const {
    getImageSchema : getAnImageSchema,
} = require('./imageSchema');

const {
    newBookmarkSchema : newBookmarkASchema,
    removeBookmarkSchema:removeABookmarkSchema
} = require('./bookmarkSchema');

const {
    newRatingSchema : newRatingASchema
} = require('./ratingSchema');

const {
    postMessageSchema : messagePostMessageSchema,
    removeMessageSchema : removeAMessageSchema
} = require('./messageSchema');

const {
    getAdInfoModo : getAnAdInfoModo,
    authoriseAdInfoModo: authoriseAnAdInfoModo,
    deleteAdInfoModo: deleteAnAdInfoModo
} = require('./modoSchema');

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
    getAnAdByIdSchema,

    getAnUserInfoAdmin,
    modifyARoleAdmin,
    deleteAnUserAdmin,

    newBookingASchema,
    removeBookingASchema,

    getAnImageSchema,

    newBookmarkASchema,
    removeABookmarkSchema,

    newRatingASchema,

    messagePostMessageSchema,
    removeAMessageSchema,

    getAnAdInfoModo,
    authoriseAnAdInfoModo,
    deleteAnAdInfoModo,

    newASavedSearchSchema,
    updateASavedSearchSchema,
    deleteASavedSearchSchema,

    insertASchema,
    loginASchema,
    updateAInfoSchema,
    updateAPasswordSchema

};

