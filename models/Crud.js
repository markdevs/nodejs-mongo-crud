const mongoose = require('mongoose');


const crudSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    position: String,
})

module.exports = mongoose.model('Crud', crudSchema);
