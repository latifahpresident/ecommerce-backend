const Products = require('../models/products');
const Users = require('../models/users');

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

// exports.editUser = async (req, res) => {
//     console.log(`top of edit user${req.body}`)
//     try {
//         const {id} = req.params;
//         if (!id) {
//             res.status(404).json(`That user was not found`);
//         } else {
//             const user = req.body;
//             console.log(user, 'inside else block')
//             const updatedUser = await Users.editUser(user, id);
//             res.status(200).json(updatedUser);
//             console.log(updatedUser, 'user updates')
//         }
//     } catch(err) {
//         res.status(500).json(`Cannot update the user`);
//         console.log(`error from edit user: ${err}`)
//     }
// };

exports.editUser = async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            res.status(404).json(`That user was not found`);
        } else {
            const user = req.body;
            const updatedUser = await Users.editUser(user, id);
            res.status(200).json(updatedUser);
        }
    } catch(err) {
        res.status(500).json(`Cannot update the user`);
        console.log(`error from edit user: ${err}`)
    }
};