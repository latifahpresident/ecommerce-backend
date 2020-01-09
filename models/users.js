const db = require('../dbconfig');

users = () => {
    return db('users').select('firebase_id', 'email', 'first_name', 'last_name', 'profile_url')
};

userById = (firebase_id) => {
    return db('users').where({'firebase_id': firebase_id}).first()
};

addUser = (user) => {
    return db('users').insert(user)
};

editUser = (user, id) => {
    return db('users').where({id}).update(user) //TODO: TAKE OUT CURLY BRACES TO SEE WHAT HAPPENS
};

deleteUser = (firebase_id) => {
    return db('users').where({firebase_id}).delete()
};

module.exports = {
    users,
    userById,
    addUser,
    editUser,
    deleteUser,
}