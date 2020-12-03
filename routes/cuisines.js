const express = require('express');
const router = express.Router();
const cuisinesCtrl = require('../controllers/cuisines')
const isLoggedIn = require('../config/auth');

router.get('/', cuisinesCtrl.index);
// router.get('/new', cuisinesCtrl.new);
// router.get('/:id', cuisinesCtrl.show);
// router.post('/', isLoggedIn, cuisinesCtrl.create);
// router.delete('/:id', cuisinesCtrl.delete);


module.exports = router;