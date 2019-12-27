const Procedure = require("../models/Procedure");

const controller = {
  getprocedure: async (req, res) => {
    res.send("procedure created!!");
  },

  createprocedure: async (req, res) => {
    res.send("procedure posted!!!");
  },

  updateprocedure: async (req, res) => {
    res.send("procedure updated!!!");
  }
};

module.exports = controller;
