const { Router } = require('express');
const router = Router();
const { getAllShifts, createShift, updateShift, deleteShift, getShiftById } = require('../Controllers/Shift')
const { Shift } = require("../../db.js");

router.post("/createshift", async (req , res) =>{
  const { day,
          availability,
          capacity,
          beginning,
          ending,
          weekday,
          week,
          month,
          year} = req.body
  try{
      const newShift = await Shift.create({ 
          day, 
          availability, 
          capacity, 
          beginning, 
          ending, 
          week, 
          weekday, 
          month, 
          year});
      res.send(newShift)
  }
  catch(err){
      res.send(err)
  }});

router.get("/all", getAllShifts);

router.get('/:id', getShiftById)

router.put("/:id/:prop", updateShift);

router.delete("/:id", deleteShift);

router.post('/bulk', async (req, res) => {
    res.json(await Shift.bulkCreate(req.body))
  });

module.exports = router;
