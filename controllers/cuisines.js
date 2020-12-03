const Recipe = require('../models/recipe');

module.exports = {
  create,
};

function create() {
  Recipe.findById(req.params.id, function(err, recipe) {
    recipe.cuisine.push(req.body);
    recipe.save(function(err) {
      res.redirect('/recipes');
    });
  });
};