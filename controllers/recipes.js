const Recipes = require('../models/recipe');

module.exports = {
  index,
  new: newRecipe,
  create,
}

function index(req, res) {
  Recipes.find({}, function(err, recipes) {
    res.render('recipes/index', { title: 'All Recipes', recipes });
  });
};

function newRecipe(req, res) {
  res.render('recipes/new', { title: 'Add Recipes' });
}

function create(req, res) {
  const recipe = new Recipes(req.body);
  recipe.save(function(err) {
    if(err) return console.log('err');
    res.redirect('/recipes');
  });
};