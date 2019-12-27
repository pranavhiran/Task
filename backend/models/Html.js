const mongoose = require("mongoose");

const HtmlSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Html", HtmlSchema);
