const express = require('express');
const getFootwares = require('../controllers/footware.controller.js');

const footwareRouter = express.Router();

footwareRouter.get('/', getFootwares);

module.exports = footwareRouter;