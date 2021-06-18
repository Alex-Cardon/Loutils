const {
    insertSchema: userInsertSchema,
    updateSchema: userUpdateSchema,
    loginSchema: userLoginSchema
} = require('./userSchema');

const {
    postMessageSchema : messagePostMessageSchema
} = require('./messageSchema');

const {
    insertSchema : insertAdSchema,
    updateSchema : updateAdSchema,
    searchSchema : searchAdSchema,
    getByIdSchema : getByIdAdSchema
} = require('./adSchema');


module.exports = {
    userInsertSchema,
    userUpdateSchema,
    userLoginSchema,
    messagePostMessageSchema,

    insertAdSchema,
    updateAdSchema,
    searchAdSchema,
    getByIdAdSchema
};

