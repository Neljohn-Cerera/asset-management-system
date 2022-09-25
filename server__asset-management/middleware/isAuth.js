const isAuth = (req, res, next) => {
  if (!req.session.isAuth) {
    return res.status(401).json({
      status: 401,
      message: "UnAuthorize Access",
    });
  }
  next();
};

module.exports = {
  isAuth,
};
