const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// Protect all routes after this middleware /only login users can enter/
router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(reviewController.setMoviesUserIds, reviewController.createReview);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
