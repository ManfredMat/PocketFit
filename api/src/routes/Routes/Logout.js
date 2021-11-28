const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  req.logout();
  res.send("You are logged out!");
});

module.exports = router;
