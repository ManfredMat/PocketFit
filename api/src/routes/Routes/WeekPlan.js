const { Router } = require("express");
const {createWeekPlan, getAllWeekPlans ,getWeekPlanById,getWeekPlanByUser,updateWeekPlan ,deleteWeekPlan , getGeneralWeekPlan} =require("../Controllers/WeekPlan")
    
const router = Router();


router.post("/", createWeekPlan)

router.get("/", getAllWeekPlans)

router.get("/general", getGeneralWeekPlan)

router.get("/:id", getWeekPlanById)

router.get("/user/:user", getWeekPlanByUser)

router.put("/:id/:prop", updateWeekPlan)

router.delete("/:id", deleteWeekPlan)


module.exports = router;