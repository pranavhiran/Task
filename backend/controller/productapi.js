const Product = require("../models/Product.js");

const controller = {
  getproduct: async (req, res) => {
    try {
      let data = await Product.find();
      res.send({ code: 1, data: data });
    } catch (e) {
      console.log(e);
      res.status(500).send({ code: 0, message: e });
    }
  },

  createproduct: async (req, res) => {
    try {
      let result = await Product.create({
        name: req.body.name,
        createdBy: req.body.createdBy
      });
      res.send({ code: 1, message: "Created successfully!" });
    } catch (e) {
      console.log(e);
      res.status(500).send({ code: 0, message: e });
    }
  },

  updateproduct: async (req, res) => {
    try {
      let result = await Product.findOneAndUpdate(
        {
          _id: req.params.id
        },
        {
          $set: {
            name: req.body.name,
            createdBy: req.body.createdBy,
            filelocation: req.body.filelocation,
            createDate: req.body.createDate,
            updateDate: req.body.updateDate
          }
        }
      );

      {
        upsert: true;
      }
      res.send({ code: 1, message: "Updated Successfully!!! " });
    } catch (e) {
      console.log(e);
      res.status(500).send({ code: 0, message: e });
    }
  }
};

module.exports = controller;
