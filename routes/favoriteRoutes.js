const express = require('express');
const favoriteController = require('../controllers/favoriteController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// Protect all routes after this middleware /only login users can enter/
router.use(authController.protect);

router
  .route('/')
  .get(favoriteController.getAllFavorites)
  .post(favoriteController.setMoviesUserIds, favoriteController.createFavorite);

router
  .route('/:id')
  .get(favoriteController.getFavorite)
  .delete(favoriteController.deleteFavorite);

module.exports = router;
