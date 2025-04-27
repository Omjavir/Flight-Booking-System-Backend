const express = require("express");
const { TodoController } = require("../../controllers");
const router = express.Router();

router.get("/", TodoController.getTodos);
router.post("/", TodoController.createTodo);

module.exports = router;
