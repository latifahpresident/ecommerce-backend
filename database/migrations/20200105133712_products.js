
exports.up = function(knex) {
  return knex.schema.createTable('products', products => {
      products.increments().primary()
      products.string('title').notNullable()
      products.float('price').notNullable().unsigned()
      products.string('description').notNullable()
      products.string('image_url').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema(dropTableIfExists('products'))
};