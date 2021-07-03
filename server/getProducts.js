const products = require('../products.json')

let getProducts = (req, res) => {
    res.status(200).json(products);
}

module.exports = getProducts;