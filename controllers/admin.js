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

//TODO: WILL NEED TO ADD ERROR HANDLING. AFTER DELETING AND GOING TO USER BY ID STILL GETTING A 200 STATUS
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

exports.editUser = async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            res.status(404).json(`That user was not found`);
        } else {
            const user = req.body;
            const updatedUser = await Users.editUser(user, id);
            res.status(201).json(`Information has been updated`);
        }
    } catch(err) {
        res.status(500).json(`Cannot update the user`);
        console.log(`error from edit user: ${err}`)
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            res.status(404).json(`User not deleted`);
        } else {
            const deletedUser = await Users.deleteUser(id)
            res.status(400).json(`User has been deleted`);
        }
    } catch(err) {
        res.status(500).json(`error deleting user`);
        console.log(`error from delete user: ${err}`)
    }
};