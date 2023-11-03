const Joi = require('joi');

// module.exports=userValidate
exports.userValidate = Joi.object().keys({
    userName: Joi.string().required().min(2).max(15),
    password: Joi.string().required().min(2).max(15),
    email:Joi.string().email().required()
})