var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/cuisines/:id/recipes/new', isLoggedIn, recipesCtrl.new);
router.post('/cuisines/:id/recipes', isLoggedIn, recipesCtrl.create);
router.delete('/recipes/:id', isLoggedIn, recipesCtrl.delete);
// router.get('/recipes/:id', recipesCtrl.show);

module.exports = router;
