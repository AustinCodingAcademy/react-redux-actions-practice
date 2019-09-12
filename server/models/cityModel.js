const mongoose = require('mongoose');

let citySchema = new mongoose.Schema({
    city: String
});

let City = mongoose.model('City', citySchema);

module.exports = City;