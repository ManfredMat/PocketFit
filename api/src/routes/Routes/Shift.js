const { Router } = require('express');
const router = Router();
const { weekCreate, createBulk, newShift, getAllShifts,getShiftByWeekNum, updateShift, deleteShift, getShiftById } = require('../Controllers/Shift')


router.post("/create", newShift);

router.get("/all", getAllShifts);

router.get('/:id', getShiftById)

router.get('/:week', getShiftByWeekNum)

router.put("/:id/:prop", updateShift);

router.delete("/:id", deleteShift);

router.post('/bulk', createBulk);

router.post('/weekcreate', weekCreate);

module.exports = router;
