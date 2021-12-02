const express = require("express");
const getAuth = require("../Controllers/GoogleAuth");
const router = express.Router();
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/callback", getAuth);

module.exports = router;
