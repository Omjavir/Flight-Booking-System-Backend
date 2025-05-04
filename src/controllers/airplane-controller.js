const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { SUCCESS_MSG } = require("../constants");

async function createAirplane(req, res) {
  try {
    // const { title, description } = req.body;

    const airplaneCreated = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    // console.log("airplaneCreated", airplaneCreated);
    SuccessResponse.data = airplaneCreated;
    SuccessResponse.message = SUCCESS_MSG.createdTodo;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    console.log("error***> ", error);

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const allAirplanes = await AirplaneService.getAirplanes();
    // console.log("allTodos", allTodos);

    SuccessResponse.data = allAirplanes;
    SuccessResponse.message = SUCCESS_MSG.fetched;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    console.log("error***> ", error);

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplane(req, res) {
  try {
    const Airplane = await AirplaneService.getAirplane(req.params.id);
    console.log("Airplane", Airplane);

    SuccessResponse.data = Airplane;
    SuccessResponse.message = SUCCESS_MSG.fetched;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    return res.status(StatusCodes.EXPECTATION_FAILED).json({
      success: false,
      message: "Exception Occurred!",
      data: {},
      error: {
        message: error.message,
        name: error.name,
        stack: error.stack, // optional
        ...(error.statusCode && { statusCode: error.statusCode })
      },
    });
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
};
