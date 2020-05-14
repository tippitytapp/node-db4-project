const Recipes = require('../data/dbConfig.js');

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesByIngredient
}

function getRecipes(){
    return Recipes('recipes')
}

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
