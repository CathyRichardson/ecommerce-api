const products = require('../products.json')

let getProduct = (req, res) => {
    console.log(req.params.id)
    let idNum = parseInt(req.params.id, 10)
    let filtered = products.filter(e => idNum === e.id)
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(500).json('Item not in list');
    }
}

module.exports = getProduct;