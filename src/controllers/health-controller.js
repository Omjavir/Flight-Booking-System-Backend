const { StatusCodes } = require("http-status-codes");

const health = (req, res) => {
  console.log('req.body', req.body);
  
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API V1 is Live",
    error: {},
    data: {},
  });
};

module.exports = { health };
