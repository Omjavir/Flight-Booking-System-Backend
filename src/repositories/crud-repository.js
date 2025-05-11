const { LoggerConfig } = require("../config");
const AppError = require("../utils/errors/app-errors");
const { StatusCodes } = require("http-status-codes");

class TodoCrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });

    if (!response) {
      throw new AppError("Not able to find the source", StatusCodes.NOT_FOUND);
    }

    return response;
  }

  async get(data) {
    console.log("data", data);

    const response = await this.model.findByPk(data);
    // console.log('res =>', response);
    if (!response) {
      throw new AppError("Not Found", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(id, data) {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }
}

module.exports = TodoCrudRepository;
