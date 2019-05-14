const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    //About
    firstName: String,
    lastName: String,

    
    //Default
    id: { type: Number, required: true },
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },

}, {
    collection: 'People'
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person