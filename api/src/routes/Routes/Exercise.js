const { Router } = require("express");
const { Exercise } = require("../../db.js");
const { createExercise,
    getAllExercises,
    getExerciseById,
    updateExercise,
    deleteExercise} =require("../Controllers/Exercise.js")
const router = Router();


router.post("/", createExercise)

router.get("/", getAllExercises)

router.get("/:id", getExerciseById)

router.put("/:name/:prop", updateExercise)

router.delete("/:name", deleteExercise)


module.exports = router;