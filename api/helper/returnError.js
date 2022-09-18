const returnError = (res, method, path) => {
  return res.status(500).json({
    message: "Internal server error",
    path,
    method,
  });
};

module.exports = {
  returnError,
};
