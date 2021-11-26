const passport = require("passport");

const login = () => {
  passport.authenticate("local"),
    (req, res, next) => {
      res.send({ message: "Success!" });
    };
};

module.exports = { login };
