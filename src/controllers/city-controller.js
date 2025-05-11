const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { SUCCESS_MSG } = require("../constants");

async function createCity(req, res) {
  try {
    // const { title, description } = req.body;

    const cityCreated = await CityService.createCity({
      name: req.body.name,
    });
    // console.log("airplaneCreated", airplaneCreated);
    SuccessResponse.data = cityCreated;
    SuccessResponse.message = SUCCESS_MSG.operationSuccessfull;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    console.log("error***> ", error);

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = { createCity };
