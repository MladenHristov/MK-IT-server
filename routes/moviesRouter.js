const express = require('express');
const movieController = require('../controllers/movieController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router({ mergeParams: true });

router.use('/:tourId/reviews', reviewRouter);

//Get the 5 best movies by rating
router
  .route('/top')
  .get(movieController.aliasTopMovies, movieController.getAllMovies);

//Get all movies and add a movie
router
  .route('/')
  //You have .filter() .sort() .paginate() added here
  .get(movieController.getAllMovies)
  .post(movieController.createMovie);

// get 1 movie by id and change/delete it
router
  .route('/movie/:id')
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
