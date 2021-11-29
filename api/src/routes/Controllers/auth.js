module.exports = {
  checkAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.sendStatus(403);
  },
};

