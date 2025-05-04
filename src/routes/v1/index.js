const express = require("express");
const { InfoController } = require("../../controllers");
const router = express.Router();
const TodoRoutes = require("./todo-routes");
const AirplaneRoutes = require("./airplane-routes");

router.use("/todo", TodoRoutes);
router.use("/airplane", AirplaneRoutes);

router.post("/health", InfoController.health);

module.exports = router;
