const { Router } = require('express');
const router = Router();
const { getAllShifts, createShift, updateShift, deleteShift } = require('../Controllers/Shift')

router.post("/create_shift", createShift);

router.get("/", getAllShifts);

router.put("/:id/:prop", updateShift);

router.delete("/:id", deleteShift);

module.exports = router;
