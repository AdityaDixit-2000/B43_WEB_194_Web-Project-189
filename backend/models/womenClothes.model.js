const mongoose = require('mongoose');

const womenClothesSchema = mongoose.Schema({
    name: String,
    brand: String,
    category: String,
    price: Number,
    color: String,
    material: String,
    size: [String],
    img_src: String
});

const womenClothesModel = mongoose.model('womenClothes', womenClothesSchema);

module.exports = womenClothesModel;