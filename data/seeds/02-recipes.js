
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'home made pancakes', notes: "how to make the perfect homemade pancakes"},
        {id: 2, name: 'home made banana pudding', notes: "how to make homemade banana pudding"}
      ]);
    });
};
