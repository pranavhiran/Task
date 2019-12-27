const express = require("express");
const router = express.Router();
const controller = require("../controller/productapi.js");

router.get("/all", controller.getproduct);

router.post("/:id", controller.createproduct);

router.put("/:id", controller.updateproduct);

module.exports = router;
