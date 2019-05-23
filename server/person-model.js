const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'office', 'teacher']
    },
    
    //Automated By Default
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },

}, {
    collection: 'People'
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person