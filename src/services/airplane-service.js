const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-errors");
const { StatusCodes } = require("http-status-codes");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log("error =>", error);

    if ((error.name == "ValidationError" || "SequelizeUniqueConstraintError")) {
      throw new AppError(
        "Cannot create a new Airplane object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw new AppError(
      "Cannot create Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    if ((error.name = "ValidationError")) {
      throw new AppError(
        "Cannot fetch data of all the airplanes",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw new AppError("Cannot create Todo", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
};
