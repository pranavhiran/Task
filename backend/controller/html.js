const Htmldata = require("../models/Html");

const controller = {
  gethtmldata: async (req, res) => {
    res.send("Htmlfile created!!");
  },

  createhtmldata: async (req, res) => {
    res.send("Htmlfile posted!!!");
  },

  updatehtmldata: async (req, res) => {
    res.send("Htmlfiel updated!!!");
  }
};

module.exports = controller;
