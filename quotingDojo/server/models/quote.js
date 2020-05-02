const mongoose = require('mongoose');


const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);