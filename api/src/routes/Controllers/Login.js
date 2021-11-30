const passport = require("passport");

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json(info.message);
    } else {
      req.login(user, function (err) {
        if (err) return next(err);
        return res.send(req.session);
      });
    }
  })(req, res, next);
};

module.exports = { login };
