const { Router } = require("express");
const { User } = require("../../db");
const router = Router();
const { checkAuth } = require("../Controllers/auth");
const {
  createUser,
  getAllUsers,
  getSpeficicUser,
  createRoutine,
  getRoutine,
  deleteRoutine,
  updateRoutine,
  modifyUser,
} = require("../Controllers/User");

router.post("/register_user", createUser);
router.get("/", checkAuth, getAllUsers);
router.put("/:id/:prop", modifyUser);
router.get("/:id", getSpeficicUser);
router.post("/traine_plan/:id", createRoutine);
router.get("/traine_plan/:id", getRoutine);
router.delete("/traine_plan/:id", deleteRoutine);
router.put("/traine_plan/:id/:prop", updateRoutine);
router.post('/bulk', async (req, res) => {
  res.json(await User.bulkCreate(req.body))
});


module.exports = router;
