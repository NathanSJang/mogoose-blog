const express = require('express');
const router = express.Router();
const aboutmeCtrl = require('../controllers/aboutme');

router.get('/', aboutmeCtrl.index);

module.exports = router;