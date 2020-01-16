const Users = require('../models/users');

//404 Not Found
//400 Bad request 
exports.getUsers = async (req, res) => {
    try {
        const UserData = await Users.users();
        res.status(200).json(UserData);
    } catch (err) {
        res.status(500).json(`No users found`);
    }
};

//TODO: WILL NEED TO ADD ERROR HANDLING. AFTER DELETING AND GOING TO USER BY ID STILL GETTING A 200 STATUS
exports.getUserById = async (req, res) => {
    try {
        const {id} = req.params
        if (!id) {
            res.status(400).json(`That user could not be found`);
        } else {
            const userData = await Users.userById(id);
            res.status(200).json(userData);
        }
    } catch(err) {
        res.status(500).json(`A user by that ID was not found`);
    }
};

exports.editUser = async (req, res) => {
    try {
        const updatedUser = req.body;
        const {id} = req.params;
        const user = await Users.editUser(updatedUser, id);
        if (!user || !id) {
            res.status(404).json(`User information was not updated`);
        } else {
            res.status(201).json(user);
        }
      } catch (error) {
        res.status(500).json({ message: `Error updating user: ${error}` });      }
};

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            res.status(404).json(`User not deleted`);
        } else {
            const deletedUser = await Users.deleteUser(id)
            res.status(200).json(`User has been deleted`);
        }
    } catch(err) {
        res.status(500).json(`error deleting user`);
    }
};