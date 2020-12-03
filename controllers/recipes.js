const Recipes = require('../models/recipe');

module.exports = {
  index,
  new: newRecipe,
  create,
  show,
}

function index(req, res) {
  Recipes.find({cuisine: 'Japanese'}, function(err, recipes) {
    console.log(recipes);
    res.render('recipes/index', { title: 'All Recipes', recipes });
  });
};

function newRecipe(req, res) {
  res.render('recipes/new', { title: 'Add Recipes' });
}

function create(req, res) {
  const recipe = new Recipes(req.body);
  console.log(recipe);
  recipe.save(function(err) {
    if(err) return console.log('err');
    res.redirect('/recipes');
  });
};

function show(req, res) {
  Recipes.findById(req.params.id, function(err, recipe) {
      res.render('recipes/show', {title: 'Recipes', recipe});
    });
}