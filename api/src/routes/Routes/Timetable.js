const { Router } = require('express');
const { createTimetable, getAllTimetables, getTimetableById, updateTimetable, deleteTimetable, reserveTimeTable} = require("../Controllers/Timetable.js")

const router = Router();


router.post("/", createTimetable);

router.get("/", getAllTimetables);

router.get("/:id", getTimetableById);

router.put("/:id/:prop", updateTimetable);

router.delete("/:id", deleteTimetable);

router.post('/availability', reserveTimeTable);

module.exports= router;