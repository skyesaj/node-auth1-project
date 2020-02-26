exports.up = function(knex) {
  return knex.schema.createTable("user", user => {
    user.increments();

    user
      .string("username", 128)
      .notNullable()
      .unique();
    user.string("password", 128).notNullable();
  });
};

exports.down = function(knex, promise) {
  return knex.schema.dropTableIfExists("user");
};
