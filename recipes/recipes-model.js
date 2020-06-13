const Recipes = require('../data/dbConfig.js');

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesByIngredient,
    findById,
    add
}

/*SELECT r.name AS RecipeName,
       r.notes,
       i.qty,
       i.unit,
       i.name AS Ingredient,
       s.step_number,
       s.instructions
  FROM recipes AS r
       JOIN
       junction AS j ON j.recipe_id = r.id
       JOIN
       ingredients AS i ON j.ingredient_id = i.id
       JOIN
       steps AS s ON s.recipe_id = r.id
 WHERE r.id = '1'*/
function getRecipes(){
    return Recipes('recipes')
}

/*SELECT i.qty,
       i.unit,
       i.name AS Ingredient,
       r.name AS Recipe
  FROM ingredients AS i
       JOIN
       junction AS j ON j.ingredient_id = i.id
       JOIN
       recipes AS r ON j.recipe_id = r.id
 WHERE r.id = '2' */
function getShoppingList(recipe_id){
    return Recipes('ingredients')
            .where('recipe_id', recipe_id)
            .join('junction as j', "j.ingredient_id", "=", "ingredients.id")
            .join('recipes as r', 'j.recipe_id', '=', 'r.id')
            .select('r.name as Recipe', 'ingredients.qty', 'ingredients.unit', 'ingredients.name')
}

function getInstructions(recipe_id){
    return Recipes('steps')
            .where('recipe_id', recipe_id)
            .join('recipes as r', 'steps.recipe_id', '=', 'r.id')
            .select('r.name as Recipe', 'steps.step_number as Step', 'steps.instructions as Instructions')
            .orderBy('steps.step_number')
}

function getRecipesByIngredient(ingredient_id){
    return Recipes('ingredients')
            .where('ingredients.id', ingredient_id )
            .join('junction as j', 'j.ingredient_id', '=', 'ingredients.id')
            .join('recipes as r', 'j.recipe_id', '=', 'r.id')
            .select('r.name')
}

function findById(id){
    return Recipes('recipes')
            .where({id})
            .first();
}

function add(recipe){
    return Recipes('recipes')
            .insert(recipe, "id")
            .then(id => {
                return findById(id[0])
            })
}