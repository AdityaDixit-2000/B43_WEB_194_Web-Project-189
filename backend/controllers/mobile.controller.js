const mobileModel = require('../models/mobile.model.js');

async function getMobiles(req, res) {
    try {
        const data = await mobileModel.find().limit(18);
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json('something went wrong pls try later');
    }
}

module.exports = getMobiles;