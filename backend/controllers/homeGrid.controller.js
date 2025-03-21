const footwareModel = require('../models/footware.model.js');
const mobileModel = require('../models/mobile.model.js');
const menClothesModel = require('../models/menClothes.model.js');
const womenClothesModel = require('../models/womenClothes.model.js');

async function getHomeGrid(req, res) {
    try {
        let data = await footwareModel.find().limit(5);
        data = data.concat(await mobileModel.find().limit(5));
        data = data.concat(await menClothesModel.find().skip(6).limit(5));
        data = data.concat(await womenClothesModel.find().limit(5));

        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json('something went wrong pls try later');
    }
}

module.exports = getHomeGrid;