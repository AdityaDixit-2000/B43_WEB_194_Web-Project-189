const footwareModel = require('../models/footware.model.js');

async function getFootwares(req, res) {
    try {
        const data = await footwareModel.find().limit(17);
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json('something went wrong pls try later');
    }
}

module.exports = getFootwares;