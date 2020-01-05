
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
      users.increments()
      users.string('firebase_id').notNullable()
      users.string('email').notNullable()
      users.string('first_name').notNullable()
      users.string('last_name').notNullable()
      users.string('profile_url').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
