const Movie = require('../models/movieModel');
const factory = require('./handlerFactory');

exports.aliasTopMovies = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage';
  req.query.fields = 'name,ratingsAverage,summary';
  next();
};

exports.getAllMovies = factory.getAll(Movie);
exports.getMovie = factory.getOne(Movie, { path: 'reviews' });
exports.createMovie = factory.createOne(Movie);
exports.updateMovie = factory.updateOne(Movie);
exports.deleteMovie = factory.deleteOne(Movie);
