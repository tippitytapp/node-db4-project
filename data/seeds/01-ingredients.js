
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'flour', qty: 1, unit: "cup"},
        {id: 2, name: 'baking powder', qty: 3, unit: "tablespoon" },
        {id: 3, name: 'sugar', qty: 1, unit: "cup" }
      ]);
    });
};
