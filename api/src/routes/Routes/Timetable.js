const { Router } = require('express');
const { createTimetable, getTimetableById, updateTimetable, deleteTimetable, getAllTimetables} = require("../Controllers/Timetable.js")

const router = Router();

router.get("/all", getAllTimetables);

router.post("/", createTimetable);

router.get("/:id", getTimetableById);

router.put("/:id/:prop", updateTimetable);

router.delete("/:id", deleteTimetable);


module.exports= router;