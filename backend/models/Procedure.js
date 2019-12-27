//const { Schema, model } = require("mongoose");

const mongoose = require("mongoose");

const procedureSchema = new mongoose.Schema({
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
  fileLocation: {
    type: String
  },
  createdDate: {
    type: Date,
    default: new Date()
  }
});

/*const Procedure = model("Procedure", procedureSchema);

module.exports = { Procedure };*/

module.exports = mongoose.model("Procedure", procedureSchema);
