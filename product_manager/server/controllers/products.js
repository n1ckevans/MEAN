const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const { flattenErrorsToArr } = require('../../helpers');

module.exports = {
  all(_, response) {
    // find all
    Product.find()
      .then((products) => {
        response.json({ products: products });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Product.findById(request.params.id)
      .then((product) => {
        response.json({ product: product });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Product.create(request.body)
      .then((newProduct) => {
        response.json({ product: newProduct });
      })
      .catch((errors) => {
        response.json({ errors: flattenErrorsToArr(errors) });
      });
  },

  delete(request, response) {
    Product.findByIdAndDelete(request.params.id)
      .then((deletedProduct) => {
        response.json({ product: deletedProduct });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedProduct) => {
        response.json({ product: updatedProduct });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}