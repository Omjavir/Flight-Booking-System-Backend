const { TodoService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { SUCCESS_MSG } = require("../constants");

/*
    GET : /
*/
async function getTodos(req, res) {
  try {
    const allTodos = await TodoService.getTodos();
    // console.log("allTodos", allTodos);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Todo fetched successfully",
      error: {},
      data: allTodos,
    });
  } catch (error) {
    return res.status(StatusCodes.EXPECTATION_FAILED).json({
      success: false,
      message: "Exception Occurred!",
      data: {},
      error: error,
    });
  }
}

/*
    POST : /
    req-body : { title: "hey", description: "xyz"}
*/
async function createTodo(req, res) {
  try {
    // const { title, description } = req.body;

    const todoCreated = await TodoService.createTodo({
      title: req.body.title,
      description: req.body.description,
    });
    // console.log("tdodocreate", todoCreated);
    SuccessResponse.data = todoCreated;
    SuccessResponse.message = SUCCESS_MSG.createdTodo;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    console.log("error***> ", error);

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  getTodos,
  createTodo,
};
