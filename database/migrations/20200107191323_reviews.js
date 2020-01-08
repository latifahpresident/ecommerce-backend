
exports.up = function(knex) {
  return knex.schema.createTable('reviews', reviews => {
      reviews.increments()
      reviews.string('title').notNullable()
      reviews.string('content').notNullable()
      reviews.timestamp('created_at').defaultTo(knex.fn.now())
      reviews.string('user_id').unsigned().notNullable().references('firebase_id').inTable('users')
      reviews.string('product_id').unsigned().notNullable().references('id').inTable('products')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reviews')
};
