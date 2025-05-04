const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function validateCreateReq(req, res, next) {
  if (!req.body.title) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = {
      explanation: "Title not found in the incoming req in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateReq,
};
