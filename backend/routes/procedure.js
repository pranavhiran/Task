const express = require("express");
const router = express.Router();
const controller = require("../controller/procedureapi.js");

router.get("/all", controller.getprocedure);

router.post("/:id", controller.createprocedure);

router.put("/:id", controller.updateprocedure);

//router.put("/update", controller.updateprocedure);

module.exports = router;
