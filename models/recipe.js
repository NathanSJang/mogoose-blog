const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  like: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  }
}, {
  timestamps: true
});

const recipeShcema = new Schema({
  title: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  note: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  directions: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  likes: [likeSchema],

}, {
  timestamps: true,
});


//When delete data, delete left ID string
// toySchema.pre('findOneAndDelete', function(next) {
//   let toy = this._conditions;
//   Puppy.updateMany({}, {'$pull': {'toys': toy._id}}, next)
// })


module.exports = mongoose.model('Recipe', recipeShcema);