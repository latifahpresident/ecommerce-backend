const db = require('../dbconfig.js');

const products = () => {
    return db('products').select('id', 'title', 'price', 'description', 'image_url')
};

const productById = () => {
    return db('products').where({'id': id}).first()
}

module.exports = {
    products,
}