const { Router } = require("express");
const { User } = require("../../db");
const router = Router();
//const { checkAuth } = require("../Controllers/auth");
const {
  createUser,
  getAllUsers,
  getSpeficicUser,
  createRoutine,
  getRoutine,
  deleteRoutine,
  updateRoutine,
  modifyUser,
  getUserPayStatus,
  assignShift,
  uploadImage,
  getShift,
  getOneUserPayStatus,
  switchStatus,
  sortAllUsers
} = require("../Controllers/User");

router.post("/register_user", createUser);
router.get("/", getAllUsers);
router.get("/sort", sortAllUsers);
router.get("/paystatus/all", getUserPayStatus);
router.get("/paystatus", getOneUserPayStatus);
router.put("/:id", uploadImage, modifyUser);
router.get("/:id", getSpeficicUser);
router.post("/traine_plan/:id", createRoutine);
router.post("/shift_user/:id", assignShift);
router.get("/shiftuser/:id", getShift);
router.get("/traine_plan/:id", getRoutine);
router.delete("/traine_plan/:id", deleteRoutine);
router.put("/traine_plan/:id/:prop", updateRoutine);
router.post("/bulk", async (req, res) => {
  res.json(await User.bulkCreate(req.body));
});
router.put("/status", switchStatus);

module.exports = router;
