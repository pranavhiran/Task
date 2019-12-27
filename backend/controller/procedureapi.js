const Procedure = require("../models/Procedure.js");

const controller = {
  getprocedure: async (req, res) => {
    try {
      let data = await Procedure.find();
      res.send({ code: 1, data: data });
    } catch (e) {
      console.log(e);
      res.status(500).send({ code: 0, message: e });
    }
  },

  createprocedure: async (req, res) => {
    try {
      let result = await Procedure.create({
        name: req.body.name,
        createdBy: req.body.createdBy
      });
      res.send({ code: 1, message: "Created successfully!" });
    } catch (e) {
      console.log(e);
      res.status(500).send({ code: 0, message: e });
    }
  },

  updateprocedure: async (req, res) => {
    try {
      let result = await Procedure.findOneAndUpdate(
        {
          _id: req.params.id
        },
        {
          $set: {
            name: req.body.name,
            createdBy: req.body.createdBy,
            filelocation: req.body.filelocation,
            //addedToProduct: req.body.addedToProduct,
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
