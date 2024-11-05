const response = (statusCode, data, message, res) => {
  res.json(statusCode, [
    {
      nama_orang: data,
      message,
      metadata: {
        prev: "",
        next: "",
        current: "",
      },
    },
  ]);
};

module.exports = response;
