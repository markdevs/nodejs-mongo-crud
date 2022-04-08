const mongoose = require('mongoose');


const crudSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type:Number, required: true},
    position: String,
    git: {type: String, required: true}
})

module.exports = mongoose.model('Crud', crudSchema);
