const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [
      4,
      "{PATH} must be at least {MINLENGTH} characters."
    ]
  },
  price: {
    type: Number,
    required: [true, "{PATH} is required."],
  },
  image: {
    type: String,
  }

}, { timestamps: true });

mongoose.model('Product', ProductSchema);