const { StatusCodes } = require("http-status-codes");
const { TodoRepository } = require("../repositories");
const { AppError } = require("../utils/errors");

const todoRepository = new TodoRepository();

async function getTodos() {
  try {
    const todos = await todoRepository.getAll();
    return todos;
  } catch (error) {
    throw error;
  }
}

async function createTodo(data) {
  // console.log("data", data);

  try {
    const todo = await todoRepository.create(data);
    return todo;
  } catch (error) {
    // console.log('error', error);

    if ((error.name = "ValidationError")) {
      throw new AppError(
        "Cannot create a new todo object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw new AppError("Cannot create Todo", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  getTodos,
  createTodo,
};
