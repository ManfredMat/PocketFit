const {Routine , Exercise} = require('../../db')

 const createRoutine = async (req , res)=>{
    let {kindOfRoutine  , excercises} = req.body;
    try{
       const newRoutine = await  Routine.create({
           kindOfRoutine
       })

       await newRoutine.setExercises(excercises)

       res.json(newRoutine)
    }
    catch(error){
        res.send(error)
    }
    
}

const getAllRoutines = async (req , res)=> {
    try{
    let routines = await Routine.findAll({})


    res.json(routines)        
    }
    catch(error){
        res.send(error)
    }
}
 const updateRoutineProp = async (req , res)=>{}

 const removeRoutine = async (req , res)=>{}

module.exports = {
    createRoutine,
    getAllRoutines,
    updateRoutineProp,
    removeRoutine
}