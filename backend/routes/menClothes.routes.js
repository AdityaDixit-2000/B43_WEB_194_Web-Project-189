const express = require('express');
const getMenClothes = require('../controllers/menClothes.controller.js');

const menClothesRouter = express.Router();

menClothesRouter.get('/', getMenClothes);

module.exports = menClothesRouter;