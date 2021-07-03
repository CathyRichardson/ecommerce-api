const express = require('express');
const products = require('../products.json')

const app = express();
const port = 5050

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
})

app.listen(port, () => console.log(`listening on port ${port}`))