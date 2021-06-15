const {
    insertSchema: userInsertSchema,
    updateSchema: userUpdateSchema,
    loginSchema: userLoginSchema
} = require('./userSchema');

const {
    postMessageSchema : messagePostMessageSchema
} = require('./messageSchema');

const {
    insertSchema : insertAdSchema
} = require('./adSchema');


module.exports = {
    userInsertSchema,
    userUpdateSchema,
    userLoginSchema,
    messagePostMessageSchema,
    insertAdSchema
};