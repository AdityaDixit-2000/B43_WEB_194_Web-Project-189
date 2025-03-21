const mongoose = require('mongoose');

const menClothesSchema = mongoose.Schema({
    name: String,
    brand: String,
    model: String,
    price: Number,
    color: [String],
    material: String,
    size: [String],
    img_src: String
});

const menClothesModel = mongoose.model('menClothes', menClothesSchema);

module.exports = menClothesModel;