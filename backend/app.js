const express = require("express");
const app = express();
const indexRouter = require("./routes/index.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Body parser used to convert to json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb://localhost:27017/incubator",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) {
      console.log("MongoDB Connection Succeeded !!!!!");
    } else {
      console.log("Error in DB Connection  :" + err);
    }
  }
);
app.use("/", indexRouter);
app.listen(6150);
