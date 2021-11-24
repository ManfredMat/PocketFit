const {Exercise} = require('../../db')

const createExercise = async(req , res) =>{
const { name, description, video, discipline } = req.body;
try{
    const newExercise = await Exercise.create({ name, description, video, discipline });
    res.json(newExercise);
}
catch(err){
    res.send(err)
}
}

const getAllExercises = async(req , res) =>{
    try{
        const allExercises = await Exercise.findAll();
        res.json(allExercises);
    }
    catch(err){
        res.send(err);
    }
}


const getExerciseById = async(req , res) =>{
    const {id} = req.params

    try{
        const oneExercise= await Exercise.findOne({where:{id:id}})
        res.send(oneExercise)
    }
    catch(error){
        next(error)
    }

}

const updateExercise = async(req , res) =>{
    const{name, prop} = req.params
    const {update} = req.body
    try{
    const oneExercise= await Exercise.findOne({where:{name:name}})
    oneExercise[prop] = update
    await oneExercise.save()
   res.send(oneExercise)
}
   catch(error){
       next(error)
   }
}

const deleteExercise = async (req , res)=>{
    const {name} = req.params

try{
    await Exercise.destroy({where:{name:name}})
res.send({message: "Entry successfully deleted"})
}

catch(error){
    next(error)
}
}

module.exports={
    createExercise,
    getAllExercises,
    getExerciseById,
    updateExercise,
    deleteExercise
}