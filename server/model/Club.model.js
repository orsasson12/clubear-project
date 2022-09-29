const mongoose = require('mongoose')

const ClubSchema = mongoose.Schema({
    clubName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    openingHours: {
        type: String,
        required: true
    },
    clubImg: {
        type: String,
        required: true
    },
    musicType: [{
        type: String,
        required: true
    }],
    clubLocation:{
        type:String,
        required:true,
    },
    entryAge: {
        type: Number,
        required: true
    }

})

const Club = mongoose.model('Clubs', ClubSchema)


module.exports = Club