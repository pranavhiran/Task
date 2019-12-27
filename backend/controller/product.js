const Product = require("../models/Product");

const controller = {
  getproduct: async (req, res) => {
    res.send("product created!!");
  },

  createproduct: async (req, res) => {
    res.send("product posted!!!");
  },

  updateproduct: async (req, res) => {
    res.send("product updated!!!");
  }
};

module.exports = controller;
