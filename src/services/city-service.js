const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-errors");
const { StatusCodes } = require("http-status-codes");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    console.log("error =>", error);

    if (
      error.name === "ValidationError" ||
      error.name === "SequelizeUniqueConstraintError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError("Cannot create City", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createCity,
};
