//const { Schema, model } = require("mongoose");

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  id: {
    type: String,
    require: true
  },
  createdBy: {
    type: String
  },
  file: {
    type: String,
    trim: true
  },

  tasks: {
    type: String,
    trim: true
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  tags: {
    type: String,
    trim: true
  }
});

/*const Product = model("product", productSchema);

module.exports = { Product } */

module.exports = mongoose.model("Product", productSchema);
