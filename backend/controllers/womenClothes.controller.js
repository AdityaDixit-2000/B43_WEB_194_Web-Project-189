const womenClothesModel = require('../models/womenClothes.model.js');

async function getWomenClothes(req, res) {
    try {
        const data = await womenClothesModel.find().limit(20);
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json('something went wrong pls try later');
    }
}

module.exports = getWomenClothes;