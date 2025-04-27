const { TodoService } = require("../services");
const { StatusCodes } = require("http-status-codes");

/*
    GET : /
*/
async function getTodos(req, res) {
  try {
    const allTodos = await TodoService.getTodos();
    // console.log("allTodos", allTodos);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Todo Created successfully",
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

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Todo Created successfully",
      error: {},
      data: todoCreated,
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

module.exports = {
  getTodos,
  createTodo,
};
