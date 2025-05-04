const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function validateCreateReq(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = {
      explanation: "Model Number not found in the incoming req in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }else if (!req.body.capacity) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = {
      explanation: "Airplane Capacity not found in the incoming req in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateReq,
};
