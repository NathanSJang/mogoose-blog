var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', isLoggedIn, recipesCtrl.index);

module.exports = router;
