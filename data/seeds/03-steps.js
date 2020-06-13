
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step_number: 1, instructions: "in a bowl, mix your dry ingredients"},
        {id: 2, recipe_id: 2, step_number: 2, instructions: 'burn baby burn'}
      ]);
    });
};
