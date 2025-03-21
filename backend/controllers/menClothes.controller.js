const menClothesModel = require('../models/menClothes.model.js');

async function getMenClothes(req, res) {
    try {
        const data = await menClothesModel.find().limit(16);
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json('something went wrong pls try later');
        console.log(error)
    }
}

module.exports = getMenClothes;