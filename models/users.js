const db = require('../dbconfig.js');

findUsers = () => {
    return db('users').select('firebase_id', 'email', 'first_name', 'last_name', 'profile_url')
}

module.exports = {
    findUsers,
}