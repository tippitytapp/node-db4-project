
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('junction').del()
    .then(function () {
      // Inserts seed entries
      return knex('junction').insert([
        {id: 1, recipe_id: 1, ingredient_id: 2},
        {id: 2, recipe_id: 2, ingredient_id: 1}
      ]);
    });
};
