const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
  name: {
    type: String,
    enum: ['Japanese', 'Korean', 'French', 'American', 'Baking'],
  },
  imageUrl: {
    type: String,
  },
  icornName: {
    type: String,
  }
});

module.exports = mongoose.model('Cuisine', cuisineSchema);