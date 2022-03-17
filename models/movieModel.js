/* eslint-disable prefer-arrow-callback */
const mongoose = require('mongoose');
const slugify = require('slugify');

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A movie must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        40,
        'A movie name must have less or equal then 40 characters'
      ],
      minlength: [10, 'A movie name must have more or equal then 10 characters']
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A movie must have a duration']
    },
    ratingsAverage: {
      type: Number,
      // do i need default?
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: val => Math.round(val * 10) / 10 //4.5
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A movie must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A movie must have a cover image']
    },
    images: [String],
    premiereDate: Date
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual populate
movieSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'movie',
  localField: '_id'
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
movieSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

movieSchema.pre('save', function(next) {
  console.log('Will save document...');
  next();
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
