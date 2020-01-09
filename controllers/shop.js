const Products = require('../models/products');

exports.getProducts = async (req, res) => {
    try {
        const productData = await Products.products();
        console.log(`product data: ${productData}`)
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(`No products found`);
        console.log(err)
    }
};