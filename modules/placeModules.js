var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new mongoose.Schema({
    placeName: String,
    adress: String,
    phone: Number,
    picURL: String,
    review: String
});

var Place = mongoose.model('place', placeSchema);

module.exports = Place;