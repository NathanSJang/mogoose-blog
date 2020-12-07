const Recipes = require('../models/recipe');

module.exports = {
  edit,
  create,
  delete: deleteLikes,
  update,
};

function edit(req, res) {
  Recipes.findOne({'likes._id': req.params.id}, function(err, recipe) {
    res.render('likes/edit', { title: 'Edit Your Comment', recipe, like: req.params.id});
  });
};

function create(req, res) {
  Recipes.findById(req.params.id, function(err, recipe) {
    //add User info
    req.body.user = req.user._id;
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

function update(req, res) {
  console.log(req.body)
  Recipes.findOne({'likes._id': req.params.id}, function(err, recipe) {
    const like = recipe.likes.id(req.params.id);
    console.log(like);
    if(!like.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);
    like.comment = req.body.comment;
    recipe.save(function(err) {
      res.redirect(`/recipes/${recipe._id}`)
    })
  })
}