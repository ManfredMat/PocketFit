const { Router } = require('express');
const router = Router();
const { getAllShifts, createShift, updateShift, deleteShift, getShiftById } = require('../Controllers/Shift')
const { Shift } = require("../../db.js");

router.post("/create_shift", createShift);

router.get("/all", getAllShifts);

router.get('/:id', getShiftById)

router.put("/:id/:prop", updateShift);

router.delete("/:id", deleteShift);

router.post('/bulk', async (req, res) => {
    res.json(await Shift.bulkCreate(req.body))
  });

module.exports = router;
