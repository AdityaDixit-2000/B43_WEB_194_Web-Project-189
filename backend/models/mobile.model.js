const mongoose = require('mongoose');

const mobileSchema = mongoose.Schema({
    brand: String,
    name: String,
    price: Number,
    storage: String,
    ram: String,
    battery_capacity: String,
    display_size: String,
    os: String,
    camera: String,
    release_date: Date,
    img_url: String,
    img_src: String
});

const mobileModel = mongoose.model('mobiles', mobileSchema);

module.exports = mobileModel;