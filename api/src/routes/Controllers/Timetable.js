const {Timetable} = require('../../db')

const createTimetable= async (req , res) =>{
const {beginning, ending, intervalo, capacity} = req.body
try{
    const newTimetable = await Timetable.create({beginning, ending, intervalo, capacity});
    res.json(newTimetable)
}
catch(err){
    res.send(err)
}}

const getTimetableById = async (req , res) =>{
const {id}= req.params
try{
    const oneTimetable = await Timetable.findOne({where:{id:id}})
    res.send(oneTimetable)
}
 catch(err){
    res.send(err)
}
}

const updateTimetable = async (req , res) =>{
    const{id} = req.params
    const {beginning, ending, intervalo, capacity} = req.body
try{
    await Timetable.update(
        {
            beginning, ending, intervalo, capacity
        },
        { where: { id: id } }
      );
      const updateTime = await Timetable.findOne({ where: { id: id } });
      console.log(updateTime)
      res.json(updateTime);
}
catch(err){
    res.send(err)
}
}

const deleteTimetable = async (req , res) =>{
const {id} = req.params
try{
    await Timetable.destroy({where:{id:id}})
    res.send({message: "Entry successfully deleted"})
}
catch(err){
    res.send(err)
}
}

const getAllTimetables = async (req , res) =>{
    try{
        const allTimetables = await Timetable.findAll()
        res.json(allTimetables)
    }
    catch(err){
        res.send(err)
    }
}


module.exports ={
    createTimetable, getTimetableById, updateTimetable, deleteTimetable, getAllTimetables
}



