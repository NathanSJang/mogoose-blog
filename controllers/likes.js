const Recipes = require('../models/recipe');

module.exports = {
  create,
  delete: deleteLikes,
};

function create(req, res) {
  Recipes.findById(req.params.id, function(err, recipe) {
    //add User info
    req.body.user = req.user.admin
    req.body.userName = req.user.name;

    recipe.likes.push(req.body);
    recipe.save(function(err) {
      res.redirect(`/recipes/${recipe._id}`);
    });
  });
};

function deleteLikes(req, res) {
  Recipes.findOne({'likes._id': req.params.id}, function(err, recipe) {
    const like = recipe.likes.id(req.params.id);
    if(!like.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);
    like.remove();
    recipe.save(function(err) {
      res.redirect(`/recipes/${recipe._id}`);
    });
  });
};