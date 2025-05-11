const express = require("express");
const { CityController } = require("../../controllers");
const router = express.Router();
const { CityMiddleware } = require("../../middlewares");

// router.get("/", CityController.getAirplanes);
// router.get("/:id", CityController.getAirplane);
router.post("/", CityMiddleware.validateCreateReq, CityController.createCity);
// router.delete("/:id", CityController.deleteAirplane);

module.exports = router;
