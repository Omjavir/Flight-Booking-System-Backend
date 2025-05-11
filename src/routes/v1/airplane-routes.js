const express = require("express");
const { AirplaneController } = require("../../controllers");
const router = express.Router();
const { AirplaneMiddleware } = require("../../middlewares");

router.get("/", AirplaneController.getAirplanes);
router.get("/:id", AirplaneController.getAirplane);
router.post(
  "/",
  AirplaneMiddleware.validateCreateReq,
  AirplaneController.createAirplane
);
router.delete("/:id", AirplaneController.deleteAirplane);

module.exports = router;
