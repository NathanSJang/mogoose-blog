const Recipes = require('../models/recipe');
const Cuisines = require('../models/cuisines');

module.exports = {
  new: newRecipe,
  show,
  create,
  delete: deleteRecipe,
};

function newRecipe(req, res) {
  Recipes.findById(req.params.id, function(err, recipes) {
    res.render('recipes/new', { title: 'Add Recipe', recipes, id: req.params.id });
  })
}

function show(req, res) {
  Recipes.findById(req.params.id, function(err, recipe) {
    res.render('recipes/show', { title: 'The Detail of Recipe', recipe });
  });
};

function create(req, res) {
  req.body.cuisine = req.params.id
  Recipes.create(req.body, function(err) {
    res.redirect(`/cuisines/${req.params.id}`);
  });
};

function deleteRecipe(req, res) {
    Recipes.findByIdAndDelete(req.params.id, function(err, deletedRecipe) {
      res.redirect(`/cuisines`);
  });
};
