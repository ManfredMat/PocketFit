const {Block , Exercise} = require('../../db')


const structureExercise = (exercises , exercisesList)=>{

    let exercisesId = exercises.map((excercise)=> excercise = excercise.id)

        exercisesId = exercisesId.map((ex)=>(exercisesList.find((exl)=> exl.id == ex)).name)

    let exercisesReps = exercises.map((excercise)=> excercise = excercise.reps)

    let exercisesDescription = exercises.map((excercise)=> excercise = excercise.description)

    let newExerArray=[]
    
    for(i=0 ; i < exercises.length ; i++){
        let newExObject = [exercisesId[i] , exercisesReps[i].toString() ,exercisesDescription[i]]
        newExerArray.push(newExObject)
    }
    

    return newExerArray

}


const createBlock = async (req , res)=>{
    let {rounds , kindOfBlock , exercises , day , order } = req.body
    
    try{
        let exercisesDb = await Exercise.findAll()
        exercisesDb = exercisesDb.map((exercise)=> exercise = {id:exercise.dataValues.id , name:exercise.dataValues.name})

        exercises = structureExercise(exercises , exercisesDb)

        
        let newBlock= await Block.create({
            day,
            order,
            rounds,
            kindOfBlock,
            exercises,
            
        })
    
        res.json(newBlock)
    }catch(error){console.log(error)}



}

const getAllBlocks = async (req , res)=>{
    try{
        let block = await Block.findAll()        
    
        res.json(block)
    }catch(error){console.log(error)}
}
const getBlockById = async (req , res)=>{

    let {id}=req.params
    try{
    let block = await Block.findOne({where:{id:id}})        

    res.json(block)
}catch(error){console.log(error)}
}

const updateBlock = async (req , res)=>{
    const{id, prop} = req.params
    const {update} = req.body
    try{
    const oneBlock= await Block.findOne({where:{id:id}})
    oneBlock[prop] = update
    await oneBlock.save()
   res.send(oneBlock)
}
   catch(error){
       next(error)
   }
}
const deleteBlock = async (req , res)=>{
    const {id} = req.params

try{
    await Exercise.destroy({where:{id:id}})
res.send({message: "Entry successfully deleted"})
}

catch(error){
    next(error)
}
}
module.exports = {
    createBlock,
    getAllBlocks,
    getBlockById,
    updateBlock,
    deleteBlock
}