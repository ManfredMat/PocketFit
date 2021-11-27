const { Router } = require("express");
const { login } = require("../Controllers/Login");
const passport = require("passport");
const router = Router();

router.post("/", passport.authenticate("local"), (req, res, next) => {
  res.send(req.session);
});

module.exports = router;
