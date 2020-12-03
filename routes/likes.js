const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
const isLoggedIn = require('../config/auth');


router.post('/recipes/:id/likes', isLoggedIn, likesCtrl.create);
router.delete('/likes/:id', isLoggedIn, likesCtrl.delete);

module.exports = router;