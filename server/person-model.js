const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    
    // id: { type: Number, required: true },
    
    //Automated By Default
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },

}, {
    collection: 'People'
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person