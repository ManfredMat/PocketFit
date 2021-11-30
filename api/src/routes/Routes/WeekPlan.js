const { Router } = require("express");
const {createWeekPlan, getAllWeekPlans ,getWeekPlanById,updateWeekPlan ,deleteWeekPlan} =require("../Controllers/WeekPlan")
    
const router = Router();


router.post("/", createWeekPlan)

router.get("/", getAllWeekPlans)

router.get("/:id", getWeekPlanById)

router.put("/:id/:prop", updateWeekPlan)

router.delete("/:id", deleteWeekPlan)


module.exports = router;