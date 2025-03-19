const express = require('express');
require('dotenv').config();

const app = express();

app.get('/myProject', async (req, res) => {
    try {
        res.status(200).json('hi, server working fine..!');
    } catch (error) {
        res.status(500).json('something went wrong pls try again later..!');
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});