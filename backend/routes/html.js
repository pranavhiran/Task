const express = require("express");
const router = express.Router();
const controller = require("../controller/htmlapi.js");

router.get("/all", controller.gethtmldata);

router.post("/data", controller.createhtmldata);

router.put("/:id", controller.updatehtmldata);

//router.put("/update", controller.updateprocedure);

module.exports = router;
