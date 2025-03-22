const { StatusCodes } = require("http-status-codes");

const health = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API V1 is Live",
    error: {},
    data: {},
  });
};

module.exports = { health };
