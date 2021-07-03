const products = require('../products.json')

let getProduct = (request, response) => {
    let idNum = parseInt(request.params.id, 10)
    let filtered = products.filter(e => idNum === e.id)
    if (filtered.length > 0) {
        response.status(200).json(filtered[0]);
    } else {
        response.status(500).json('Item not in list');
    }
}

module.exports = getProduct;


//using the .find()
// const getProduct = (req, res) => {
//     // find returns the item if it finds it, or undefined if not
//     const item = products.find((val) => val.id === parseInt(req.params.id))
//     if (!item) {
//       return res.status(500).send('Item not in list')
//     }
//     res.status(200).send(item)
//   }