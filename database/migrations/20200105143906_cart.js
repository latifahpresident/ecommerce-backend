
exports.up = function(knex) {
  return knex.schema.createTable('cart', cart => {
      cart.increments().primary()
      cart.string('user_id').unsigned().references('firebase_id').inTable('users')
      cart.integer('product_id').unsigned().references('id').inTable('products')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cart')
};
