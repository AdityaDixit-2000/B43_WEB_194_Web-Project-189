const express = require('express');
const getHomeGrid = require('../controllers/homeGrid.controller.js');

const homeGridRouter = express.Router();

homeGridRouter.get('/', getHomeGrid);

module.exports = homeGridRouter;