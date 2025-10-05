const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors');

router.get('/author/:id', authorsController.getArticlesByAuthor)

module.exports = router;