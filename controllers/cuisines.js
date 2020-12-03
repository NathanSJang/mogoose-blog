const { NotExtended } = require('http-errors');
const Cuisines = require('../models/cuisines');
const Recipes = require('../models/recipe');

module.exports = {
  index,
  new: newCuisine,
  create,
};

function index(req, res) {
  Cuisines.find({}, function(err, cuisines) {
    res.render('cuisines/index', {title: 'Cusines', cuisines});
  });
};

function newCuisine(req, res) {
  res.render('cuisines/new', {title: 'Add Cuisine'});
};

function create(req, res) {
  let cuisines = new Cuisines(req.body);
  cuisines.save(function(err) {
    if(err) return res.render('cuisines/new');
    res.redirect('/cuisines');
  })
};