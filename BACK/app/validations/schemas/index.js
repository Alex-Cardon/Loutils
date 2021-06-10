const {
    insertSchema: userInsertSchema,
    updateSchema: userUpdateSchema,
    loginSchema: userLoginSchema
} = require('./userSchema');

module.exports = {
    userInsertSchema,
    userUpdateSchema,
    userLoginSchema
};