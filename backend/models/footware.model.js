const mongoose = require('mongoose');

const footwareSchema = mongoose.Schema({
    name: String,
    brand: String,
    category: String,
    material: String,
    price: Number,
    size: [ String ],
    color: String,
    img_src: String
});

const footwareModel = mongoose.model('footwares', footwareSchema);

module.exports = footwareModel;