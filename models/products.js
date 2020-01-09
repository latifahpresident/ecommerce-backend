const db = require('../dbconfig.js');

const products = () => {
    return db('products').select('id', 'title', 'price', 'description', 'image_url')
}

module.exports = {
    products,
}