
const { Shift, Timetable, User } = require('../../db')

const newShift = async (req, res) => {
  const { day,
    availability,
    capacity,
    beginning,
    ending,
    weekday,
    week,
    month,
    year } = req.body
  try {
    const oldShift = await Shift.findOne({
      where: {
        day: day,
        beginning: beginning,
        ending: ending,
        weekday: weekday,
        week: week,
        month: month,
        year:year
      }
    })
    if (oldShift === null) {
    const newS = await Shift.create({
      day,
      availability,
      capacity,
      beginning,
      ending,
      weekday,
      week,
      month,
      year
    });
    //console.log(newS)
    res.send(newS)
  }else{res.send({message:'turno existente'})}}
  catch (err) {
    res.send(err)
  }
}

const getAllShifts = async (req, res) => {
  const {day, month, year} = req.query
    try {
      const allShift = await Shift.findAll()
      const allShiftFiltered = allShift.filter((shift)=> shift.year >= year && shift.month >= month && shift.day >= day)

       /*  const allShift = await Shift.findAll({
         // where:{year: `^([0-9]|[1-9][0-9]|${year})$`.year, month: month > Shift.month, day: day > Shift.day },
          include: User})*/
        res.json(allShiftFiltered) 
    }
    catch (err) {
        res.send(err)
    }
}

const getAllShiftsPlus = async (req, res) => {
    try {
      const allShift = await Shift.findAll()
        res.json(allShift) 
    }
    catch (err) {
        res.send(err)
    }
}

const getShiftById = async (req, res) => {
    const { id } = req.params

    try {
        const oneShift = await Shift.findOne({ where: { id: id }, include: User})
        res.send(oneShift)
    }
    catch (error) {
        res.send(error)
    }

}

const getShiftByWeekNum = async (req, res) => {
  const { week } = req.params

 try {
     const WeekShifts = await Shift.findAll({
       where: {week : week},
       include: User
     })
     res.send(WeekShifts)
 }
 catch (error) {
     next(error)
 } 
}

const updateShift = async (req, res) => {
    const { idUser, idShift } = req.body
    try {
        let oneShift = await Shift.findOne({ where: { id: idShift }, include: User })
        let addUser = await User.findOne({ where: {id: idUser}})
        await oneShift.addUser(addUser)
        let newAvailability = oneShift.capacity -1
        oneShift.availability = newAvailability
        //oneShift.update()
        res.send(oneShift)
    }
    catch (err) {
        res.send(err)
    }
}

const deleteShift = async (req, res) => {
    const { id } = req.params
    try {
        await Shift.destroy({ where: { id: id } })
        res.send({ message: "Shift successfully deleted" })
    }
    catch (err) {
        res.send(err)
    }
}

const createBulk = async (req, res) => {
    try{res.json(await Shift.bulkCreate(req.body))}
    catch(error){
        res.send(error)
    }
  }

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

  const weekCreate = async (req, res) => {
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
  }

module.exports = { weekCreate, createBulk, newShift, getAllShifts, getShiftByWeekNum, updateShift, deleteShift, getShiftById,getAllShiftsPlus };