const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectMongodb = require('./config/db.js');
const mobileRouter = require('./routes/mobile.routes.js');
const menClothesRouter = require('./routes/menClothes.routes.js');
const womenClothesRouter = require('./routes/womenClothes.routes.js');
const footwareRouter = require('./routes/footware.routes.js');

const homeGridRouter = require('./routes/homeGrid.route.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/mobiles', mobileRouter);
app.use('/menClothes', menClothesRouter);
app.use('/womenClothes', womenClothesRouter);
app.use('/footwares', footwareRouter);

app.use('/homeGrid', homeGridRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    connectMongodb();
    console.log(`Server is running on port ${port}`);
});