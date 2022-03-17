const Favorite = require('../models/favoriteModel');
const factory = require('./handlerFactory');

exports.setMoviesUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllFavorites = factory.getAll(Favorite);
exports.getFavorite = factory.getOne(Favorite);
exports.createFavorite = factory.createOne(Favorite);
exports.updateFavorite = factory.updateOne(Favorite);
exports.deleteFavorite = factory.deleteOne(Favorite);
