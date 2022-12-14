const mongoose = require('mongoose')
const Joi = require('joi')



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1000
    },


})

const User = mongoose.model('User', userSchema)


function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).email().required(),
        password: Joi.string().min(6).max(1000).required(),
       
    })


    return schema.validate(user)
}


module.exports = {
    User,
    validateUser
}