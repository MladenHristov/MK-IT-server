// review(note) / rating / createdAt / ref to movie / ref to user
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema(
  {
    favorite: {
      type: Boolean,
      default: false,
      required: [true, 'You must confirm that this is your favorite!']
    },
    movie: {
      type: mongoose.Schema.ObjectId,
      ref: 'movie',
      required: [true, 'You must add a movie.']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'You must be a user.']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

favoriteSchema.index({ movie: 1, user: 1 }, { unique: true });

favoriteSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name photo'
  });
  next();
});

// findByIdAndUpdate/Delete
favoriteSchema.pre(/^findOneAnd/, async function(next) {
  this.r = await this.findOne();
  next();
});

favoriteSchema.post(/^findOneAnd/, async function() {
  await this.r.constructor.calcAverageRatings(this.r.movie);
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
