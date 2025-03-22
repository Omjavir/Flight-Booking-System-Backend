const express = require("express");
const { InfoController } = require("../../controllers");
const router = express.Router();

router.get("/health", InfoController.health);

module.exports = router;
