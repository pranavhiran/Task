const express = require("express");
const router = express.Router();
const procedureRouter = require("./procedure.js");
const productRouter = require("./product.js");
const htmlRouter = require("./html.js");

//procedure
router.use("/procedure", procedureRouter);

//product
router.use("/product", productRouter);

//user

//tasks

//html
router.use("/html", htmlRouter);

router.use("/", (req, res) => {
  res.send("Health check route!!");
});

module.exports = router;
