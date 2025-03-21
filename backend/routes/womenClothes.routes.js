const express = require('express');
const getWomenClothes = require('../controllers/womenClothes.controller.js');

const womenClothesRouter = express.Router();

womenClothesRouter.get('/', getWomenClothes);

module.exports = womenClothesRouter;