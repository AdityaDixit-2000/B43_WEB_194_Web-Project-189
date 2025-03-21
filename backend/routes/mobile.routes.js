const express = require('express');
const getMobiles = require('../controllers/mobile.controller.js');

const mobileRouter = express.Router();

mobileRouter.get('/', getMobiles);

module.exports = mobileRouter;