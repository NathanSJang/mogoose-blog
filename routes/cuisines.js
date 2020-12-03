const express = require('express');
const router = express.Router();
const cuisinesCtrl = require('../controllers/cuisines')
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, cuisinesCtrl.index);
router.get('/new', isLoggedIn, cuisinesCtrl.new);
router.get('/:id', isLoggedIn, cuisinesCtrl.show);
router.post('/', isLoggedIn, cuisinesCtrl.create);
router.delete('/:id', isLoggedIn, cuisinesCtrl.delete);


module.exports = router;