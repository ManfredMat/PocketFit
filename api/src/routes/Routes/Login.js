const { Router } = require("express");
const router = Router();
const { login } = require("../Controllers/Login.js");

router.post("/", login);

module.exports = router;
