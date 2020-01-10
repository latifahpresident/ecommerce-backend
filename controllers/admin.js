const Users = require('../models/users');

exports.getUsers = async (req, res) => {
    try {
        const UserData = await Users.users();
        res.status(200).json(UserData);
    } catch (err) {
        res.status(500).json(`No users found`);
        console.log(`error from getUsers: ${err}`)
    }
};

exports.getUserById = async (req, res) => {
    try {
        const {id} = req.params
        if (id) {
            const userData = await Users.userById(id);
            res.status(200).json(userData);
        } else {
            res.status(400).json(`That user could not be found`);
        }
    } catch(err) {
        res.status(500).json(`A user by that ID was not found`);
        console.log(`error from getUserById: ${err}`);
    }
};

exports.addUser = async (req, res) => {
    try {
        const user = req.body;
        if (user) {
            const newUser = await Users.addUser(newUser) ;
            res.status(200).json(newUser);
        } else {
            res.status(400).json(`Please enter all input fields`);
        }
    } catch(err) {
        res.status(500).json(`There was an error adding you information`);
        console.log(`error from: ${err}`)
    }
}