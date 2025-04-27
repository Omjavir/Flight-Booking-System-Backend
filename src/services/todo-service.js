const { TodoRepository } = require("../repositories");

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
    throw error;
  }
}

module.exports = {
  getTodos,
  createTodo,
};
