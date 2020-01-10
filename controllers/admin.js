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

//TODO: ADD BETTER ERROR HANDLING, WILL NEED TO CHECK IF USER EXISTS FIRST
exports.addUser = async (req, res) => {
    try {
        const user = req.body;
        if (user) {
            const newUser = await Users.addUser(user);
            res.status(200).json(newUser);
        } else {
            res.status(400).json(`Please enter all input fields`);
        }
    } catch(err) {
        res.status(500).json(`There was an error adding you information`);
        console.log(`error from addUser: ${err}`)
    }
};

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