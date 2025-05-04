const express = require("express");
const { AirplaneController } = require("../../controllers");
const router = express.Router();
const { AirplaneMiddleware } = require("../../middlewares");

router.get("/", AirplaneController.getAirplanes);
router.post("/", AirplaneMiddleware.validateCreateReq, AirplaneController.createAirplane);

module.exports = router;
