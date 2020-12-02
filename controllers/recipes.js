const Recipes = require('../models/recipe');

module.exports = {
  index,
}

function index(req, res) {
  Recipes.find({}, function(err, recipe) {
    res.render('recipes/index', { title: 'All Recipes', recipe });
  });
};