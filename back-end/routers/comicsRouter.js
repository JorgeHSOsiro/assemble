const express = require('express');

const comicsController = require('../controllers/comicControllers');

const router = express.Router();

router.post('/comics', comicsController.favoriteComics);
router.get('/favorite/comics', comicsController.getAllComics);

module.exports = router;
