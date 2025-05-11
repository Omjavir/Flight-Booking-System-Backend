const express = require("express");
const { InfoController } = require("../../controllers");
const router = express.Router();
const TodoRoutes = require("./todo-routes");
const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");

router.use("/todo", TodoRoutes);
router.use("/airplane", AirplaneRoutes);
router.use("/city", CityRoutes);

router.post("/health", InfoController.health);

module.exports = router;
