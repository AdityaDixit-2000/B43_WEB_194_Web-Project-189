const mongoose = require('mongoose');
require('dotenv').config();

async function connectMongodb() {
    try {
        await mongoose.connect(process.env.mongoDB_url);
        console.log('Mongodb connected...');
    } catch (error) {
        console.log(error, 'something went erong while connecting mongodb');
    }
}

module.exports = connectMongodb;