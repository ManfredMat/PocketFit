const { Shift } = require('../../db')

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
      const newS = await Shift.findOrCreate({
       where: {
        day : day,
        week : week,
        weekday : weekday,
        month : month,  
        beginning : beginning,
        ending : ending,
        year : year
      }
      });
      console.log(newS)
      res.send(newS)
    }
    catch (err) {
      res.send(err)
    }
}

const getAllShifts = async (req, res) => {
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
        const oneShift = await Shift.findOne({ where: { id: id } })
        res.send(oneShift)
    }
    catch (error) {
        res.send(error)
    }

}

const getShiftByWeekNum = async (req, res) => {
     const { week } = req.params
    console.log(typeof week)
    let week2 = parseInt(week)
    console.log(week2)
    console.log(typeof week2)
    try {
        const WeekShifts = await Shift.findOne({ where: { week: week2 } })
        console.log(WeekShifts)
        res.send(WeekShifts)
    }
    catch (error) {
        res.send(error)
    } 

}

const updateShift = async (req, res) => {
    const { id, prop } = req.params
    const { update } = req.body
    try {
        let oneShift = await Shift.findOne({ where: { id: id } })
        oneShift[prop] = update
        console.log(oneShift)
        await oneShift.save()
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

module.exports = { createBulk, newShift, getAllShifts, getShiftByWeekNum, updateShift, deleteShift, getShiftById };