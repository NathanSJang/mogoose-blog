const { NotExtended } = require('http-errors');
const Cuisines = require('../models/cuisines');
const Recipes = require('../models/recipe');

module.exports = {
  index,
  new: newCuisine,
  show,
  create,
  delete: deleteCuisine,
};

function index(req, res) {
  Cuisines.find({}, function(err, cuisines) {
    res.render('cuisines/index', { title: 'Cuisines', cuisines });
  });
};

function newCuisine(req, res) {
  res.render('cuisines/new', { title: 'Add Cuisine' });
};

function show(req, res) {
  Cuisines.findById(req.params.id, function(err, cuisine) {
    Recipes.find({cuisine: req.params.id}, function(err, recipe) {
      console.log(cuisine);
      console.log(recipe);
      res.render('cuisines/show', { title: 'Recipes', cuisine, recipe });
    });
  });
};

function create(req, res) {
  let cuisines = new Cuisines(req.body);
  cuisines.save(function(err) {
    if(err) return res.render('cuisines/new');
    res.redirect('/cuisines');
  })
};

function deleteCuisine(req, res) {
  Cuisines.findByIdAndDelete(req.params.id, function(errr, deletedCuisine) {
    res.redirect('/cuisines');
  });
};