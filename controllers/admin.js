const Users = require('../models/users');

exports.getUsers = async (req, res) => {
    try {
        const UserData = await Users.findUsers();
        res.status(200).json(UserData);
    } catch (err) {
        res.status(500).json('No users found')
        console.log(`error from getUsers: ${err}`)
    }
}