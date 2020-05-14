const express = require('express');
const Recipes = require('./recipes-model.js');
const router = express.Router();


router.get('/recipes/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Failed to retrieve recipes",
                error
            })
        })
})

router.get('/recipes/:id/shoppinglist', (req, res) => {
    const recipe_id = req.params.id
    Recipes.getShoppingList(recipe_id)
        .then(list => {
            res.status(200).json(list)
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Failed to retreive shopping list",
                error
            })
        })
})

router.get('/recipes/:id/instructions', (req, res) => {
    const recipe_id = req.params.id
    Recipes.getInstructions(recipe_id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: 'Error Retrieving Instructions',
                error
            })
        })
})

router.get('/ingredients/:id/recipes', (req, res) => {
    const ingredient_id = req.params.id
    Recipes.getRecipesByIngredient(ingredient_id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: "Could not retrieve list",
            error
        })
    })
})



module.exports = router;