
exports.up = function(knex) {
  return knex.schema.createTable('recipes', recipes => {
      recipes.increments();
      recipes.text('name').notNullable();
      recipes.text('notes').notNullable();

  })
  .createTable('ingredients', ingredients => {
      ingredients.increments();
      ingredients.text('name').notNullable();
      ingredients.float('qty').notNullable();
      ingredients.text('unit').notNullable();
  })
  .createTable('steps', steps => {
      steps.increments();
      steps.integer('step_number').notNullable();
      steps.text('instructions').notNullable();
      steps
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
  })
  .createTable('junction', junction => {
      junction.increments();
      junction
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    junction
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('junction')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
