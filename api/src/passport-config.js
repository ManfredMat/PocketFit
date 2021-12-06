const Strategy = require("passport-local").Strategy;
const sequelize = require("sequelize");
const { User } = require("./db.js");
const bcrypt = require("bcrypt");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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
              if (user.imageData) {
                const userImg = user.imageData.toString("base64");
                user["imageData"] = userImg;
              }
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

  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "318198588175-t32ch17n9vdonvsp7qspqltgqa851eeu.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: `http://localhost:3001/api/google/callback`,
        session: false,
      },
      async (accessToken, refreshToken, profile, done) => {
        const googleUser = profile._json;
        try {
          let user = await User.findOne({ where: { mail: googleUser.email } });
          if (!user) {
            user = await User.create({
              email: googleUser.email,
            });
          }
          return done(null, user);
        } catch (err) {
          done(err);
        }
      }
    )
  );
};
