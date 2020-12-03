const Recipes = require('../models/recipe');

module.exports = {
  new: newRecipe,
  create,
};

function newRecipe(req, res) {
  Recipes.findById(req.params.id, function(err, recipes) {
    res.render('recipes/new', { title: 'Add Recipe', recipes, id: req.params.id });
  })
}

function create(req, res) {
  req.body.cuisine = req.params.id
  Recipes.create(req.body, function(err) {
    res.redirect(`/cuisines/${req.params.id}`);
  })
}