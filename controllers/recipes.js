const Recipes = require('../models/recipe');

module.exports = {
  new: newRecipe,
};

function newRecipe(req, res) {
  Recipes.findById(req.params.id, function(err, recipes) {
    res.render('recipes/new', { title: 'Add Recipe', recipes, id: req.params.id });
  })
}