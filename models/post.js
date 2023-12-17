const mongoose = require('mongoose');
const Schema = mongoose.Schema; // extract schema from mongoose object

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true } // created at and updated at
);

module.exports = mongoose.model('Post', postSchema); // model based on schema
