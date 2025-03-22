const health = (req, res) => {
  return res.json({
    success: true,
    message: "API V1 is Live",
    error: {},
    data: {},
  });
};

module.exports = { health };
