const { LoggerConfig } = require("../config");
class TodoCrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      LoggerConfig.error("Error creating a todo", { error });
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      LoggerConfig.error("Error deleting a todo", { error });
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.finByPk(data);
      return response;
    } catch (error) {
      LoggerConfig.error("Error getting a todo", { error });
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      LoggerConfig.error("Error getting a todo", { error });
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      LoggerConfig.error("Error getting a todo", { error });
      throw error;
    }
  }
}

module.exports = TodoCrudRepository;
