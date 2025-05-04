const express = require("express");
const { TodoController } = require("../../controllers");
const router = express.Router();
const { TodoMiddleware } = require("../../middlewares");

router.get("/", TodoController.getTodos);
router.post("/", TodoMiddleware.validateCreateReq, TodoController.createTodo);

module.exports = router;
