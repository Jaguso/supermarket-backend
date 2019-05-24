const express = require('express');
const router = express.Router();
const listController = require('../controllers/list');

router.post('/', listController.list_create);

module.exports = router;