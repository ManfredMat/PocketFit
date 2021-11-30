const { Router } = require('express');
const { createTimetable, getAllTimetables, getTimetableById, updateTimetable, deleteTimetable} = require("../Controllers/Timetable.js")

const router = Router();


router.post("/", createTimetable);

router.get("/", getAllTimetables);

router.get("/:id", getTimetableById);

router.put("/:id/:prop", updateTimetable);

router.delete("/:id", deleteTimetable);


module.exports= router;