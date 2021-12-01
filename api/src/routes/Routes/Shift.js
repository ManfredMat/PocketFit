const { Router } = require('express');
const router = Router();
const { createBulk, newShift, getAllShifts,getShiftByWeekNum, updateShift, deleteShift, getShiftById } = require('../Controllers/Shift')
const { Shift, Timetable } = require("../../db.js");

router.post("/create", newShift);

router.get("/all", getAllShifts);

router.get('/:id', getShiftById)

router.get('/:week', getShiftByWeekNum)

router.put("/:id/:prop", updateShift);

router.delete("/:id", deleteShift);

router.post('/bulk', createBulk);


//TIENE UN BULK Y NO ME FUNCIONABA CON CONTROLLER NO SE PORQUE

//FUNCION AUXILIAR 
const WeekDaysGenerator = (
  firstDay,
  firstDayMonth,
  firstDayMonthDays,
  lastDay,
  lastDayMonth
) => {
  if (firstDayMonth === lastDayMonth) {
    return {
      monthNum: [firstDayMonth, undefined],
      daysNums: Array.from(
        { length: (lastDay - firstDay) / 1 + 1 },
        (_, i) => firstDay + i * 1
      ),
    };
  } else if (firstDayMonth !== lastDayMonth) {
    let LastsFirstMonth = Array.from(
      { length: (firstDayMonthDays - firstDay) / 1 + 1 },
      (_, i) => firstDay + i * 1
    );
    let FirstsLastMonth = Array.from(
      { length: (lastDay - 1) / 1 + 1 },
      (_, i) => 1 + i * 1
    );
    return {
      monthNum: [firstDayMonth, lastDayMonth],
      daysNums: LastsFirstMonth.concat(FirstsLastMonth)
    }
  }
};

router.post('/weekcreate', async (req, res) => {
  const {
    weekDaysNames,
    firstDay,
    firstDayMonth,
    firstDayMonthDays,
    lastDay,
    lastDayMonth,
    week,
    year,
    timetableId
  } = req.body;
  try {
    const selectTimetable = await Timetable.findOne({ where: { id: timetableId } })
    console.log(selectTimetable.intervalo)

    //const intervalo = ["7-9", "9-11", "11-13", "14-16", "16-18", "18-20"]; //esto viene de timetable
    //const capacity = 10; //esto viene de timetable

    const array = [];
    const WeekDays = WeekDaysGenerator(
      firstDay,
      firstDayMonth,
      firstDayMonthDays,
      lastDay,
      lastDayMonth,
    );

    for (let i = 0; i < weekDaysNames.length; i++) {
      for (let j = 0; j < selectTimetable.intervalo.length; j++) {
        array.push({
          availability: selectTimetable.capacity,
          capacity: selectTimetable.capacity,
          beginning: selectTimetable.intervalo[j].split("-")[0],
          ending: selectTimetable.intervalo[j].split("-")[1],
          weekday: weekDaysNames[i],
          day: WeekDays.daysNums[i],
          month:
            WeekDays.monthNum[1] === undefined
              ? WeekDays.monthNum[0]
              : WeekDays.daysNums[i] > WeekDays.daysNums[i + 1]
                ? WeekDays.monthNum[0]
                : WeekDays.monthNum[1],
          year: year,
          week: week,
          kindOfShift: "no se borra"
        });
      }
    }
    res.json(await Shift.bulkCreate(array))
  } catch (err) {
    res.send(err)
  }
});

module.exports = router;
