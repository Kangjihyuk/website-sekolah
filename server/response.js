const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    data,
    message,
  });
};

module.exports = response;
