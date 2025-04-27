const express = require("express");
const { InfoController } = require("../../controllers");
const router = express.Router();
const TodoRoutes = require("./todo-routes");

router.use("/todo", TodoRoutes);

router.post("/health", InfoController.health);

module.exports = router;
