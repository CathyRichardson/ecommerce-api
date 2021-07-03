const products = require('../products.json')

let getProducts = (request, response) => {
    if (request.query.price) {
        let productPrice = parseFloat(request.query.price)
        let responseProducts = products.filter(e => e.price >= productPrice);
        response.status(200).json(responseProducts);
    } else {
        response.status(200).json(products);
    }
}

module.exports = getProducts;