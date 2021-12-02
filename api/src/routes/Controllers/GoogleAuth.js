const passport = require("passport");

const getAuth = (req, res, next) => {
  passport.authenticate("google", (err, user) => {
    if (err) return next(err);
    if (!user) {
      res.send(`Error: Google user couldn't be found`);
    } else {
      res.redirect(`https://www.youtube.com`);
    }
  })(req, res, next);
};

module.exports = getAuth;
