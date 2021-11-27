const Strategy = require("passport-local").Strategy;
const sequelize = require("sequelize");
const { User } = require("./db.js");
const bcrypt = require("bcrypt");

module.exports = function (passport) {
  passport.use(
    new Strategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ where: { email: email } })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "Email not found" });
          }

          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password mismatch" });
            }
          });
        })
        .catch((err) => console.log(err));
    })
  );

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((user, done) => done(null, user));
};
