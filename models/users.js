const db = require('../dbconfig');

users = () => {
    return db('users').select('firebase_id', 'email', 'first_name', 'last_name', 'profile_url')
};

//For future reference, I'm using id in place of firebase_id as the args name so users won't know what technology I'm using for authentication
userById = (id) => {
    return db('users').where({'firebase_id': id}).first()
};

addUser = (user) => {
    return db('users').insert(user)
};

editUser = (user, id) => {
    return db('users').where({id}).update(user) //TODO: TAKE OUT CURLY BRACES TO SEE WHAT HAPPENS
};

deleteUser = (id) => {
    return db('users').where({id}).delete()
};

module.exports = {
    users,
    userById,
    addUser,
    editUser,
    deleteUser,
}