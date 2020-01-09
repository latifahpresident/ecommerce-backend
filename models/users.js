const db = require('../dbconfig');

users = () => {
    return db('users').select('firebase_id', 'email', 'first_name', 'last_name', 'profile_url')
}

module.exports = {
    users,
}